const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: [true, "Email already exists with this id"]
    },
})

const userModel = mongoose.model("duck", userSchema);

module.exports = userModel;