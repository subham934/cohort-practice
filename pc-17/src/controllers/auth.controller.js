const userModel = require('../models/user.model');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")

async function registerController  (req, res)  {
  const { email, username, password, bio, profileImage } = req.body;

  //   const isUserExistByEmail = await userModel.findOne({ email });

  //   if (isUserExistByEmail) {
  //     res.status(409).json({ message: 'User already exist with this email' });
  //   }

  //   const isUserExistByUsername = await userModel.findOne({ username });

  //   if (isUserExistByUsername) {
  //     res.status(409).json({ message: 'User already exist with this username' });
  //   }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        'User already Exists ' +
        (isUserAlreadyExists.email == email
          ? 'Email already exists'
          : 'Username already exists'),
    });
  }

//   const hash = crypto.createHash('sha256').update(password).digest('hex');

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    email,
    username,
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

  res.status(201).json({
    message: 'User created successfully',
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}


async function loginController (req, res) {
  const { email, username, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email: email }, { username: username }],
  });

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

//   const hash = crypto.createHash('sha256').update(password).digest('hex');

//   const isPasswordValid = hash === user.password;

    const isPasswordValid = await bcrypt.compare(password, user.password);


  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid password',
    });
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

  return res.status(200).json({
    message: 'User logged in successfully',
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {registerController, loginController}