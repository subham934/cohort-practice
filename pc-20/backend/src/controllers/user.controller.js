const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');

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

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isUserFollowing) {
    return res.status(404).json({
      message: 'You are not following this user!',
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  return res.status(201).json({
    success: true,
    message: 'Unfollowed successfully',
  });
}

async function getAllfolloweeController(req, res) {
  // Step 1 — Who is the logged-in user? test_1
  const followerUsername = req.user.username;

  // Step 2 — Find all follow records where test_1 is the follower
  const followingUsers = await followModel.find({
    follower: followerUsername,
  });
  //Step 3 — extract all followee usernames ,
  //  .map() loops over each object and pulls out only the followee field.
  const followingUserNames = followingUsers.map((item) => item.followee);

  // Step 4 — Fetch full user data for those usernames

  const allFollowingUsersData = await userModel.find({
    username: { $in: followingUserNames },
  });

  // Step 4 mein hum userModel se un users ki complete details nikalte hain jinhe logged-in user follow karta hai. Step 3 mein hume sirf usernames ki ek array milti hai (jaise ["test_2", "test_3"]). Phir MongoDB ke $in operator ka use karke hum users collection mein har document ke username field ko check karte hain. Agar kisi document ka username is array ke kisi value se match karta hai, to MongoDB us user ka poora document (jaise fullname, email, profile picture, bio, etc.) return kar deta hai. Yaani $in ek filter ki tarah kaam karta hai jo array mein diye gaye usernames se matching users ko dhoondhkar unki complete information la deta hai.

  return res.status(201).json({
    success: true,
    message: 'List of all following users',
    following: allFollowingUsersData,
  });
}

async function acceptFollowController(req, res) {
  // followee = jo accept/reject kar raha hai
  const followeeUsername = req.user.username;

  // follower = jisne follow request bheja tha = URL se aayega
  const followerUsername = req.params.username;

  // DB mein us record ko dhundo aur status update karo
  const followRecord = await followModel.findOneAndUpdate(
    { follower: followerUsername, followee: followeeUsername },
    { status: 'accepted' },
    { new: true } // updated document return karo
  );

  if (!followRecord) {
    return res.status(404).json({
      message: 'Follow request not found!',
    });
  }

  res.status(200).json({
    message: `You accepted ${followerUsername}'s follow request!`,
    follow: followRecord,
  });
}

async function rejectFollowController(req, res) {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  const followRecord = await followModel.findOneAndUpdate(
    { follower: followerUsername, followee: followeeUsername },
    { status: 'rejected' },
    { new: true }
  );

  if (!followRecord) {
    return res.status(404).json({
      message: 'Follow request not found!',
    });
  }

  res.status(200).json({
    message: `You rejected ${followerUsername}'s follow request!`,
    follow: followRecord,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getAllfolloweeController,
  acceptFollowController,
  rejectFollowController,
};
