const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: value => {
                if (!validator.isEmail(value)) {
                    throw new Error({ error: 'Invalid Email address' });
                }
            }
        },
        password: {
            type: String,
            required: true,
            minLength: 7
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = userSchema;
