require('dotenv').config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../Models/users');
const BlacklistedToken = require('../Models/tokenBlacklist');
const Mahasiswa = require('../Models/mahasiswa');
const resetPasswordEmail = require('../Utils/reusedFunc').resetPasswordEmail;

module.exports.register = async (req, res) => {
    try {
        const { email, username, password, NIM, isDike = false } = req.body;

        // Check if a user with the provided email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] }).lean();
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Validate NIM if isDike is true
        if (isDike) {
            const validNIM = await Mahasiswa.findOne({ NIM }).lean();
            if (!validNIM) {
                return res.status(400).json({ error: 'Invalid NIM for Mahasiswa' });
            }
        }

        // Define user data to be saved
        const userData = { email, username, password, isDike };
        if (isDike) {
            userData.NIM = NIM; // Add NIM only if isDike is true and valid
        }

        // Create the new user
        const user = await User.create(userData);

        // Generate JWT token
        const tokenPayload = {
            _id: user._id,
            email: user.email,
            username: user.username,
            isDike: user.isDike
        };
        if (isDike) {
            tokenPayload.NIM = user.NIM; // Add NIM to token payload only if isDike is true
        }
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Respond with success message, token, and user data
        res.status(201).json({
            message: "Registration successful",
            token,
            user: { ...user.toObject(), password: undefined } // Remove password from user object
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
        await resetPasswordEmail(user.email, resetUrl);

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