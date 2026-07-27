const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// ─────────────────────────────────────
// CREATE POST
// ─────────────────────────────────────

async function createPostController(req, res) {
  // console.log(req.body, req.file);

  // step 1: check token

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized access..',
    });
  }

  // step 2: token verify karo

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token not valid, Unauthorized access..',
    });
  }

  // step 3: Image ko imagekit pe upload karo

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'posts',
  });

  // Step 4: Post ko database mein save karo
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url, // imagekit ka URL
    user: decoded.id, // token se nikala hua userId
  });

  // step 5: Response bhejo

  res.status(201).json({
    message: 'Post created successfully',
    post: post,
  });
}

// ─────────────────────────────────────
// GET ALL POSTS (of logged-in user)
// ─────────────────────────────────────

async function getPostController(req, res) {
  // step 1: check token
  const token = req.cookies.token;

  // step2: Token exist karta hai?
  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized Access.',
    });
  }

  // step 3: token verify karo::

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: 'Token not valid, Unauthorized Access.',
    });
  }

  // Step 4: userId nikalo aur uske posts dhundo

  const userId = decoded.id;

  const post = await postModel.find({ user: userId });

  //   step 5: Response Bhejo

  res.status(200).json({
    message: 'Posts fetched Successfully',
    post,
  });
}

// ─────────────────────────────────────
// GET POST DETAILS (owner only)
// ─────────────────────────────────────

async function getPostDetailsController(req, res) {
  // LINE 1: Cookie se token nikalo
  const token = req.cookies.token;

  // token nahi toh 401 bhejo
  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized access...',
    });
  }

  // verify token

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token not valid, Unauthorized access..!!!',
    });
  }

  // userId from token, yeh wahi hai jisne req kiya hai

  const userId = decoded.id;

  // URL Se post nikalo
  const postId = req.params.postId;

  // DB se wohi specific post dhundo by ID
  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found...',
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: 'Forbidden Content...',
    });
  }
  return res.status(200).json({
    message: 'Post details fetched successfully.',
    post,
  });
}

module.exports = { createPostController, getPostController, getPostDetailsController };
