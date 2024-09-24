require('dotenv').config();
const Olcon = require('../Models/olcon');
const sendTicket = require('../Utils/reusedFunc').sendTicket;
module.exports.joinolcon = async (req, res) => {
    try {
        const { email, username } = req.body;
        if(!email || !username) return res.status(400).json({ error: 'Email and username are required' });
        // Ensure that olcon is there LOL
        const olcon = await Olcon.findOne({});
        if (!olcon) return res.status(500).json({ error: 'OLCon document not found' });

        // Check if the email or username already exists in the document
        if (olcon.email.includes(email)) return res.status(400).json({ error: 'Email is already used for enrolling to OLCon' });

        // Check if slots are available and if arrays have reached their limits
        if (olcon.slots <= 0 || olcon.email.length >= 40) {
            return res.status(400).json({ error: 'OLCon slots are full or limits reached' });
        }

        // Update the document
        olcon.email.push(email);
        olcon.slots -= 1;

        // Save the document and send the ticket
        await Promise.all([
            olcon.save(),
            sendTicket(email, username)
        ]);

        res.status(200).json({ message: "Welcome to OLConvention. Check your email for the ticket!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.getolcon = async (req, res) => {
    try {
        const olcon = await Olcon.findOne({});
        if (!olcon) return res.status(404).json({ error: 'OLCon not found' });

        res.status(200).json({ olcon });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}