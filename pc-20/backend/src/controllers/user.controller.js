const followModel = require('../models/follow.model');
const userModel = require("../models/user.model")




async function followUserController(req, res) {
  // kyunki humne identifyUser middleware use kiya hai , aur uska kaam rehta hai ki kaun sa user request kar raha hai usse identify karke req.user variable me store karna , toh req.user se uska id use karenge

  const followerUsername = req.user.username; // yaha pe jo bhi user request kar raha hai uska USERNAME nikal liya
  const followeeUsername = req.params.username; //  req.params.username => URL mein jo ":username" tha woh yahan milta hai

  // Cannot follow yourself logic — check BEFORE touching the DB
  if (followerUsername == followeeUsername) {
    return res.status(400).json({
      message: 'You cannot follow yourself!',
    });
  }

  // now, to check if the user we want to follow exist or not, for that we write a logic below as

  const isFolloweeUser = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isFolloweeUser) {
    return res.status(404).json({
      message: `User ${followeeUsername} not found!`,
    });
  }

  // cant follow one user multiple times
  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(409).json({
      message: `You are already following ${followeeUsername}!`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    success: true,
    message: `You are now following ${followeeUsername}!`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res){
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;
  

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername
  })

  if(!isUserFollowing){
    return res.status(404).json({
      message: "You are not following this user!"
    })
  }

  await followModel.findByIdAndDelete(isUserFollowing._id)

  return res.status(201).json({
    success:true,
    message:"Unfollowed successfully"
  })
  


}

module.exports = {
  followUserController,
  unfollowUserController
};
