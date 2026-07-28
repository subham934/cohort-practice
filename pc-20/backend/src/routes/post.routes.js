const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middlewares/auth.middleware');

/**
 * POST /api/posts/ - [protected]
 * req.body = { caption }
 * req.file = { imgUrl }
 */

postRouter.post(
  '/',
  upload.single('imgUrl'), // pehle multer file padhega
  identifyUser, // phir user identify hoga
  postController.createPostController // phir controller chalega
);

/**
 * GET /api/posts/ - [protected]
 * logged-in user ke saare posts fetch karo
 */

postRouter.get('/', identifyUser, postController.getPostController);

/**
 * GET /api/posts/details/:postId - [protected]
 * specific post ki detail fetch karo
 * check karo ki post usi user ka hai jo request kar raha hai
 */
postRouter.get(
  '/details/:postId',
  identifyUser,
  postController.getPostDetailsController
);

module.exports = postRouter;
