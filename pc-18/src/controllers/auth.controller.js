const userModel = require('../models/user.model');
// const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
  const { email, password, username, bio, profileImage } = req.body;

  const isUserExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserExist) {
    return res.status(409).json({
      message:
        'User already exist ' +
        (isUserExist.email === email
          ? 'with same Email'
          : 'with same Username'),
    });
  }

//   const hash = crypto.createHash('sha256').update(password).digest('hex');

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  res.cookie('token', token);

  res.status(200).json({
    message: 'User Registered Successfully',
    user: {
      name: user.username,
      email: user.email,
      id: user._id,
      bio: user.bio,
      profileImage: user.profileImage,
    },
    token,
  });
}

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      { username: username },
      {
        email: email,
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }

//   const hash = crypto.createHash('sha256').update(password).digest('hex');

//   if (user.password !== hash) {
//     return res.status(401).json({
//       message: 'Invalid Password',
//     });
//   }


  const isPasswordValid = await bcrypt.compare(password, user.password);

  if(!isPasswordValid){
    return res.status(401).json({
        message: "Invalid Password"
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  res.cookie('token', token);

  res.status(200).json({
    message: 'User Logged In Successfully',
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = { registerUser,loginUser };
