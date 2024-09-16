const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const olconSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    email: [{
        type: String,
        unique: true,
        match: [emailRegex, 'Please fill a valid email address']
    }],
    slots: {
        type: Number,
        default: 40
    },
});

module.exports = mongoose.model('Olcon', olconSchema);