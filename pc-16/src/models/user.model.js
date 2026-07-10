const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'User Name already exist'],
    required: [true, 'User Name is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email already is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  bio: String,
  profileImage: {
    type: String,
    default: 'https://ik.imagekit.io/lq7qd2rhd/43316699.jpg',
  },
});


const userModel = mongoose.model("users", userSchema)

module.exports = userModel;


