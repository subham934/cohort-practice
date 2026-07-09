const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    unique: [true, 'Account already exist with this email ID'],
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
