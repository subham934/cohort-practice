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


module.exports = userRouter;


//hum jab yaha pe identifyUser ko as a middleware use karenge toh uske aage hum jo bhi controller use karenge , uss controller main req.user jisko hum read karke pata kar sakte hain ki kaun sa user request kar raha hai. 

//here we use the controller named followUserController