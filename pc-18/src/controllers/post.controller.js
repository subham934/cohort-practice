const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  // token check karo
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized Access',
    });
  }

  // verify token
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token is not valid',
    });
  }

  //    Image ko ImageKit pe upload karo
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'instaDoodle',
  });

  //   Post ko database mein save karo

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  //   Response bhejo
  res.status(201).json({
    message: 'Post created Successfully',
    post,
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Token not provided, Unauthorized Access.',
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token is not valid, Unauthorized Access.',
    });
  }

  const userId = decoded.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: 'Posts fetched Successfully',
    posts,
  });
}

async function getPostDetailsController(req, res) {
  // LINE 1: Cookie se token nikalo
  const token = req.cookies.token;

  // LINE 2: Token nahi hai toh 401 bhejo
  if (!token) {
    return res.status(401).json({
      message: 'Token not Provided, Unauthorized Access.',
    });
  }

  // LINE 3: decoded bahar declare karo
  let decoded;

  // LINE 4: Token verify karo
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: 'Token is Invalid, Unauthorized Access.',
    });
  }

  // LINE 5: Token se userId nikalo
  const userId = decoded.id;
  // LINE 6: URL se postId nikalo
  // req.params.postId => URL ka dynamic part
  // eg: GET /api/posts/details/64abc123 => postId = "64abc123"
  const postId = req.params.postId;

  // LINE 7: DB se post dhundo by id
  const post = await postModel.findById(postId);

  // LINE 8: Post nahi mili toh 404 bhejo
  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }

  // LINE 9: Check karo ki post usi user ka hai jo request kar raha hai
  const isValidUser = post.user.toString() === userId;

  // LINE 10: User match nahi kiya toh 403 Forbidden bhejo
  if (!isValidUser) {
    return res.status(403).json({
      message: 'You can only view your own posts',
    });
  }

  // LINE 11: Sab theek hai — post bhejo
  return res.status(200).json({
    message: 'Post details fetched successfully.',
    post,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController
};
