const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const { Schema } = mongoose

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
})

const SALT = Number(process.env.SALT)


userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, SALT);
    next();
});

const User = mongoose.model("User", userSchema)


module.exports = User