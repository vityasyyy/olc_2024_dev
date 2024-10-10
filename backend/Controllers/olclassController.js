const User = require('../Models/users');
const Olclass = require('../Models/olclass');
const Olcon = require('../Models/olcon');
const { sendTicket } = require('../Utils/reusedFunc');

// Helper function to send error responses
const sendErrorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({ error: message });
};

module.exports = {
    // Enroll User in OLClass
    enroll: async (req, res) => {
        try {
            const { slug: olClassSlug } = req.params;
            const { _id: userId, email, username } = req.user;

            // Validate required fields
            if (!userId || !email || !username) {
                return sendErrorResponse(res, 400, 'User ID, email, and username are required');
            }

            // Fetch OLClass, User, and OLCon concurrently
            const [olClass, user, olCon] = await Promise.all([
                Olclass.findOne({ slug: olClassSlug }),
                User.findById(userId),
                Olcon.findOne({})
            ]);

            // Check if the user is already enrolled in OLCon
            if (olCon && olCon.email.includes(email)) {
                // Remove user from OLCon and update slots
                await Olcon.updateOne(
                    { _id: olCon._id },
                    {
                        $pull: { email: email },
                        $inc: { slots: 1 }
                    }
                );
            }

            // Check if OLClass, User exist and if user is already enrolled
            if (!olClass) {
                return sendErrorResponse(res, 404, 'OLClass not found');
            }

            if (!user) {
                return sendErrorResponse(res, 404, 'User not found');
            }

            if (olClass.enrolledBy.includes(userId)) {
                return sendErrorResponse(res, 400, 'User already enrolled in this OLClass');
            }

            // Validate if slots are available and if the user is enrolled in another OLClass
            if (olClass.slots <= 0) {
                return sendErrorResponse(res, 400, 'No slots available');
            }

            if (user.enrolledTo) {
                return sendErrorResponse(res, 400, 'User is already enrolled in another OLClass');
            }

            // Enroll user in the OLClass and update slots
            olClass.enrolledBy.push(userId);
            olClass.slots -= 1;

            // Assign olClass to the user's enrollment
            user.enrolledTo = olClass._id;

            // Save both OLClass and User, and send the ticket
            await Promise.all([olClass.save(), user.save(), sendTicket(email, username)]);

            return res.status(200).json({ message: 'User enrolled successfully', olClass });
        } catch (error) {
            console.error(error);
            return sendErrorResponse(res, 500, 'An error occurred while enrolling user');
        }
    },

    // Get All OLClasses
    getAllClasses: async (req, res) => {
        try {
            const olClasses = await Olclass.find({});
            return res.status(200).json(olClasses);
        } catch (error) {
            console.error(error);
            return sendErrorResponse(res, 500, 'An error occurred while fetching classes');
        }
    },

    // Get Single OLClass by Slug
    getOneClass: async (req, res) => {
        try {
            const { slug: olClassSlug } = req.params;

            const olClass = await Olclass.findOne({ slug: olClassSlug });

            if (!olClass) {
                return sendErrorResponse(res, 404, 'OLClass not found');
            }

            return res.status(200).json(olClass);
        } catch (error) {
            console.error(error);
            return sendErrorResponse(res, 500, 'An error occurred while fetching the OLClass');
        }
    }
};
