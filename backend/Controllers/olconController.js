require('dotenv').config();
const Olcon = require('../Models/olcon');
const Olclass = require('../Models/olclass');
const { sendTicket } = require('../Utils/reusedFunc');

// Helper function to send error responses
const sendErrorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({ error: message });
};

module.exports = {
    // Join OLCon controller
    joinolcon: async (req, res) => {
        try {
            const { email, username } = req.body;

            // Validate input
            if (!email || !username) {
                return sendErrorResponse(res, 400, 'Email and username are required');
            }

            // Check if email is already enrolled in OLClass
            const existingOLClass = await Olclass.findOne({}).populate('enrolledBy', 'email');
            if (!existingOLClass) {
                return sendErrorResponse(res, 404, 'OLClass not found');
            }

            const alreadyEnrolledInOLClass = existingOLClass.enrolledBy.some(user => user.email === email);
            if (alreadyEnrolledInOLClass) {
                return sendErrorResponse(res, 400, 'Email is already used for enrolling in OLClass');
            }

            // Find OLCon document
            const olcon = await Olcon.findOne({});
            if (!olcon) {
                return sendErrorResponse(res, 404, 'OLCon document not found');
            }

            // Check if email already enrolled in OLCon
            if (olcon.email.includes(email)) {
                return sendErrorResponse(res, 400, 'Email is already used for enrolling in OLCon');
            }

            // Check if slots are available
            if (olcon.slots <= 0 || olcon.email.length >= 40) {
                return sendErrorResponse(res, 400, 'OLCon slots are full or limits reached');
            }

            // Enroll user
            olcon.email.push(email);
            olcon.slots -= 1;

            // Save OLCon and send the ticket
            await Promise.all([
                olcon.save(),
                sendTicket(email, username)
            ]);

            return res.status(200).json({ message: 'Welcome to OLConvention. Check your email for the ticket!' });
        } catch (error) {
            return sendErrorResponse(res, 500, error.message);
        }
    },

    // Get OLCon data controller
    getolcon: async (req, res) => {
        try {
            const olcon = await Olcon.findOne({});
            if (!olcon) {
                return sendErrorResponse(res, 404, 'OLCon not found');
            }

            return res.status(200).json({ olcon });
        } catch (error) {
            return sendErrorResponse(res, 500, error.message);
        }
    }
};
