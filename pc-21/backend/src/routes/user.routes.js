const express = require("express");
const userController = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userid
 * @description follow a user
 * @access Private
 */

userRouter.post(
  "/follow/:username", // jiss user ko follow karna chahte ho uss user ka username pass kar do, 
  identifyUser,
  userController.followUserController,
);

/**
 * @route POST /api/users/unfollow/:userid
 * @description unfollow a user
 * @access Private
 */
userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

/**
 * @route GET /api/users/followers
 * @description get all users that the logged-in user is following
 * @access Private
 */
userRouter.get(
  "/followers",
  identifyUser,
  userController.getAllfolloweeController,
)
module.exports = userRouter;

/**
 * @route POST /api/users/accept/:userid
 * @description accept a follow request
 * @access Private
 */

userRouter.post("/accept/:username", identifyUser, userController.acceptFollowController);

/**
 * @route POST /api/users/reject/:userid
 * @description reject a follow request
 * @access Private
 */

userRouter.post("/reject/:username", identifyUser, userController.rejectFollowController);


//hum jab yaha pe identifyUser ko as a middleware use karenge toh uske aage hum jo bhi controller use karenge , uss controller main req.user jisko hum read karke pata kar sakte hain ki kaun sa user request kar raha hai. 

//here we use the controller named followUserController