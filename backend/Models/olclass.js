const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const olclassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    enrolledBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    slots: {
        type: Number,
        default: 40
    }
});

module.exports = mongoose.model('Olclass', olclassSchema);