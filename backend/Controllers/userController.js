require('dotenv').config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../Models/users');
const BlacklistedToken = require('../Models/tokenBlacklist');
const Mahasiswa = require('../Models/mahasiswa');

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS
    }
});

module.exports.register = async (req, res) => {
    try {
        const { email, username, password, nomorHP, NIM } = req.body;
        const existingUser = await User.findOne({ $or: [{ email }, { username }] }).lean();
        if (existingUser) return res.status(400).json({ error: 'User already exists' });
        if(NIM) {
            const existingNim = await Mahasiswa.findOne({NIM}).lean();
            if (!existingNim) return res.status(400).json({ error: 'NIM not found' });
        }
        const user = await User.create({ email, username, password, nomorHP, NIM });
        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            username: user.username,
            nomorHP: user.nomorHP,
            NIM: user.NIM
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ 
            message: "Registration successful",
            token,
            user: { ...user.toObject(), password: undefined }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ 
            message: "Login successful",
            token,
            user: { ...user.toObject(), password: undefined }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.logout = async (req, res) => {
    try {
        const decoded = jwt.decode(req.token);
        await BlacklistedToken.create({
            token: req.token,
            expiresAt: new Date(decoded.exp * 1000),
        });
        res.json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.validate = (req, res) => {
    res.json({ message: "Authenticated", user: { id: req.user._id, email: req.user.email, username: req.user.username } });
};

module.exports.requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpires = Date.now() + 3600000;

        await User.updateOne({ _id: user._id }, {
            resetToken,
            resetTokenExpiration: resetTokenExpires
        });

        const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
        await sendResetEmail(user.email, resetUrl);

        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiration: { $gt: Date.now() },
        });

        if (!user) return res.status(400).json({ error: 'Password reset token is invalid or has expired.' });

        user.password = newPassword; // Hash password before saving
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save();

        res.status(200).json({ message: 'Password has been updated.' });
    } catch (error) {
        console.error('Error during password reset:', error);
        res.status(500).json({ error: error.message });
    }
};
async function sendResetEmail(email, resetUrl) {
    const mailOptions = {
        from: '"OmahTI Learning Center 2024 Password Reset" <noreply-password-reset-olc2024@omahti.web.id>',
        to: email,
        subject: 'Password Reset Request',
        html: `
            <h1>Password Reset Request</h1>
            <p>You requested a password reset. Click the button below to reset your password:</p>
            <a href="${resetUrl}" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Reset Password</a>
            <p>If you did not request this, please ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
        `
    };

    await transporter.sendMail(mailOptions);
}