const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nimRegex = /^\d{2}\/\d{6}\/[A-Z]{2}\/\d{5}$/;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [emailRegex, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    NIM: {
        type: String,
        unique: true,
        match: [nimRegex, 'Please fill a valid NIM']
    },
    nomorHP: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    enrolledTo: {
            type: Schema.Types.ObjectId,
            ref: "Event"
    },
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }],
    resetToken: {
        type: String
    },
    resetTokenExpiration: {
        type: Date
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);