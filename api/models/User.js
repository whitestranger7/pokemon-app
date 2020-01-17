const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    }
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
});

const User = mongoose.model('User', userSchema);

module.exports = User;