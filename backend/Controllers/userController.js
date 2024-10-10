require('dotenv').config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../Models/users');
const Olcon = require('../Models/olcon');
const BlacklistedToken = require('../Models/tokenBlacklist');
const Mahasiswa = require('../Models/mahasiswa');
const { resetPasswordEmail } = require('../Utils/reusedFunc');

// Helper function for error handling
const handleError = (res, statusCode, message) => {
    return res.status(statusCode).json({ error: message });
};

// Register new user
module.exports.register = async (req, res) => {
    try {
        const { email, username, password, NIM, isDike = false } = req.body;

        // Check if user with the provided email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] }).lean();
        if (existingUser) {
            return handleError(res, 400, 'User already exists');
        }

        // Validate NIM if user isDike
        if (isDike) {
            const validNIM = await Mahasiswa.findOne({ NIM }).lean();
            if (!validNIM) {
                return handleError(res, 400, 'Invalid NIM for Mahasiswa');
            }
        }

        // Create the new user
        const userData = { email, username, password, isDike, ...(isDike && { NIM }) };
        const user = await User.create(userData);

        // Generate JWT token
        const tokenPayload = {
            _id: user._id,
            email: user.email,
            username: user.username,
            isDike: user.isDike,
            ...(isDike && { NIM: user.NIM })
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Respond with success message
        res.status(201).json({
            message: "Registration successful",
            token,
            user: { ...user.toObject(), password: undefined } // Exclude password from response
        });
    } catch (error) {
        return handleError(res, 500, error.message);
    }
};

// Login user
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await user.comparePassword(password))) {
            return handleError(res, 400, 'Invalid email or password');
        }

        // Generate JWT token
        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            username: user.username,
            isDike: user.isDike
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            message: "Login successful",
            token,
            user: { ...user.toObject(), password: undefined }
        });
    } catch (error) {
        return handleError(res, 500, error.message);
    }
};

// Logout user by blacklisting token
module.exports.logout = async (req, res) => {
    try {
        const decoded = jwt.decode(req.token);

        await BlacklistedToken.create({
            token: req.token,
            expiresAt: new Date(decoded.exp * 1000),
        });

        res.json({ message: "Logout successful" });
    } catch (error) {
        return handleError(res, 500, error.message);
    }
};

// Validate authenticated user
module.exports.validate = (req, res) => {
    res.json({
        message: "Authenticated",
        user: {
            id: req.user._id,
            email: req.user.email,
            username: req.user.username,
            isDike: req.user.isDike
        }
    });
};

// Get user's enrolled class and OLCon details
module.exports.getEnrolledClass = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return handleError(res, 400, "User ID is required");
        }

        const [user, olcon] = await Promise.all([
            User.findById(userId).populate('enrolledTo'),
            Olcon.findOne({})
        ]);

        if (!user) return handleError(res, 404, "User not found");
        if (!olcon) return handleError(res, 404, "OLCon not found");

        res.json({
            enrolledTo: user.enrolledTo,
            olcon
        });
    } catch (error) {
        return handleError(res, 500, error.message);
    }
};

// Request password reset
module.exports.requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) return handleError(res, 404, 'User not found');

        const resetToken = crypto.randomBytes(20).toString('hex');
        const resetTokenExpires = Date.now() + 3600000;

        await User.updateOne({ _id: user._id }, {
            resetToken,
            resetTokenExpiration: resetTokenExpires
        });

        const resetUrl = `${req.protocol}://${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        await resetPasswordEmail(user.email, resetUrl);

        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        return handleError(res, 500, error.message);
    }
};

// Reset password
module.exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiration: { $gt: Date.now() }
        });

        if (!user) return handleError(res, 400, 'Password reset token is invalid or has expired.');

        user.password = newPassword; // Hash password before saving
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save();

        res.status(200).json({ message: 'Password has been updated.' });
    } catch (error) {
        console.error('Error during password reset:', error);
        return handleError(res, 500, error.message);
    }
};
