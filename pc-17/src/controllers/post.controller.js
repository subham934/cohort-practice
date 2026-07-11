const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  // Step 1: Token check karo
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized access.',
    });
  }

  // Step 2: Token verify karo
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid Token, Unauthorized access.',
    });
  }

  // Step 3: Image ko ImageKit pe upload karo
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'cohort-2-instaclone-posts',
  });

  // Step 4: Post ko database mein save karo
  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url, // imagekit ka URL
    user: decoded.id, // token se nikala hua userId
  });

  // Step 5: Response bhejo
  res.status(201).json({
    message: 'Post created Successfully',
    post,
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid Token, Unauthorized access.',
    });
  }

  // Step 4: userId aur postId nikalo

  const userId = decoded.id;

  const posts = await postModel.find({ user: userId });

  return res.status(200).json({
    message: 'Posts fetched successfully',
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Token not provided.' });

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token.' });
  }

  const userId = decoded.id;

  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) return res.status(404).json({ message: 'Post not found' });

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser)
    return res.status(403).json({ message: 'Forbidden Content.' });

  return res
    .status(200)
    .json({ message: 'Post details fetched successfully.', post });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
