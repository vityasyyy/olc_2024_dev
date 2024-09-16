require('dotenv').config();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const BlacklistedToken = require('../Models/tokenBlacklist');

module.exports.isAuthenticated = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if token has expired
        if (Date.now() >= decoded.exp * 1000) {
            return res.status(401).json({ error: 'Token has expired, please log in again' });
        }

        // Check if token is blacklisted
        const blacklistedToken = await BlacklistedToken.findOne({ token });
        if (blacklistedToken) {
            return res.status(401).json({ error: 'Token has been invalidated.' });
        }

        // Attach the user to the request object
        req.user = {
            _id: decoded?._id,
            email: decoded?.email,
            username: decoded?.username,
            iat: decoded?.iat,
            exp: decoded?.exp
            // Add any other fields you need here
        };
        req.token = token;  // Store the token for potential blacklisting

        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};