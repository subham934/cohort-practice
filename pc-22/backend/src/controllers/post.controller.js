const postModel = require('../models/post.model');
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
// const jwt = require('jsonwebtoken');
const likeModel = require('../models/like.model');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// ─────────────────────────────────────
// CREATE POST
// ─────────────────────────────────────

async function createPostController(req, res) {
  // console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), 'file'),
    fileName: 'Test',
    folder: 'posts',
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url, // imagekit ka URL
    user: req.user.id, // token se nikala ha userId
  });

  res.status(201).json({
    message: 'Post created Successfully',
    post,
  });
}

// ─────────────────────────────────────
// GET ALL POSTS (of logged-in user)
// ─────────────────────────────────────

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  return res.status(201).json({
    message: 'Posts fetched successfully.',
    posts,
  });
}

// ─────────────────────────────────────
// GET POST DETAILS (owner only)
// ─────────────────────────────────────

async function getPostDetailsController(req, res) {
  // LINE 1: middleware se userId nikalo
  const userId = req.user.id;

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

async function likePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: 'Post not found...',
    });
  }

  const isAlreadyLiked = await likeModel.findOne({
    user: username,
    post: postId,
  });

  if (isAlreadyLiked) {
    return res.status(409).json({
      message: 'Post already liked.',
    });
  }

  const like = await likeModel.create({
    user: username,
    post: postId,
  });

  return res.status(201).json({
    message: 'Post Liked Successfully',
    like,
  });
}

async function getFeedController(req, res) {
  const user = req.user;
  
  const posts = await Promise.all((await postModel.find().populate("user").lean()).map(
    async (post) => {
    
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      })
      post.isLiked = Boolean(isLiked);
      return post;
    },
  ));

  // postModel.find() will return all the post we have created.
  
  res.status(200).json({
    message: "Post fetched successfully.",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController,
};
