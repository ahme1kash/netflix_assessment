const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        email: {
            type: String,
            required: [true, "email is Required"],
            unique: true,
            min: 14,
            validate: {
                validator: validator.isEmail,
                message: "Please provide a valid email",
            },
        },

        password: {
            type: String,
            required: [true, "Password is Required"],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); 
