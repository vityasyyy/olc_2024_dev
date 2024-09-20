const User = require('../Models/users');
const Olclass = require('../Models/olclass');
const Olcon = require('../Models/olcon');
const sendTicket = require('../Utils/reusedFunc').sendTicket;

module.exports.enroll = async (req, res) => {
    try {
        const { slug: olClassSlug } = req.params; // Get the slug from the request parameters
        const userId = req.user._id;
        const email = req.user.email;
        const username = req.user.username;
        const payment = req.body.payment;

        const [olClass, user, olCon] = await Promise.all([
            Olclass.findOne({ slug: olClassSlug }), // Use findOne to search by slug
            User.findById(userId),
            Olcon.findOne({})
        ]);

        if (olCon.email.includes(email)) {
            // Ensure you await the update operation to guarantee it's executed
            await Olcon.updateOne(
                { _id: olCon._id },
                { 
                    $pull: { email: email }, // Remove the email from the array
                    $inc: { slots: 1 }  // Increment slots by 1
                }
            );
        }

        if (!olClass) {
            return res.status(404).json({ error: 'olClass not found' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (olClass.enrolledBy.includes(userId)) {
            return res.status(400).json({ error: 'User already enrolled' });
        }

        if (olClass.slots <= 0) {
            return res.status(400).json({ error: 'No slots available' });
        }

        if (user.enrolledTo) {
            return res.status(400).json({ error: 'You are already enrolled in another olClass' });
        }

        // Enroll user in the olClass and update slots
        olClass.enrolledBy.push(userId);
        olClass.slots -= 1;

        // Add olClass to user's enrolled list
        user.payment = payment;
        user.enrolledTo = olClass._id; // Use olClass._id here

        // Save both olClass and user
        await Promise.all([olClass.save(), user.save(), olCon.save(), sendTicket(email, username)]);

        res.status(200).json({ message: 'User enrolled successfully', olClass });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'An error occurred while enrolling user' });
    }
};


module.exports.getAllClasses = async (req, res) => {
    try {
        const OLClasses = await Olclass.find({})
        res.status(200).json(OLClasses);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching classes' });
    }
};

module.exports.getOneClass = async (req, res) => {
    try {
        const { slug: olClassSlug } = req.params;

        const OLClass = await Olclass.findOne({slug: olClassSlug})

        if (!OLClass) {
            return res.status(404).json({ error: 'class not found' });
        }

        res.status(200).json(OLClass);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the class' });
    }
};
