const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'Username already exists'],
    required: [true, 'username is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      'https://ik.imagekit.io/lq7qd2rhd/ChatGPT%20Image%20Mar%207,%202026,%2010_25_17%20PM.png',
  },
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;