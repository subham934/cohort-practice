const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique:[true, "User already exist with this email"]
    }
})

const userModel = mongoose.model("real", userSchema);

module.exports = userModel;