const express = require('express');
const userModel = require('../models/user.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

// POST api/auth/register

authRouter.post('/register', async (req, res) => {
  const { username, email, password, bio, profileImage } = req.body;

  // // check if a user already exist with this email

  // const isUserAlreadyExistByEmail = await userModel.findOne({email})

  // if(isUserAlreadyExistByEmail){
  //     return res.status(409).json({
  //         message: "User already exists with same email."
  //     })
  // }

  // // check if a user already exist with this username

  // const isUserAlreadyExistByUsername = await userModel.findOne({username})

  // if(isUserAlreadyExistByUsername){
  //     return res.status(409).json({
  //         message: "User already exists with this username."
  //     })
  // }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        'User already exist ' +
        (isUserAlreadyExist.email === email
          ? 'with this email'
          : 'with this username'),
    });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });

  const token = jwt.sign(
    {
      /*
            - user ka data hona chahiye,
            - data unique hona chahiye
      */
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token);

  return res.status(201).json({
    message: 'User created successfully',
    user: {
      name: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
});

module.exports = authRouter;
