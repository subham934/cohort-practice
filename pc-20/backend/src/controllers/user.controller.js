const followModel = require("../models/follow.model");

async function followUserController(req, res) {

  // kyunki humne identifyUser middleware use kiya hai , aur uska kaam rehta hai ki kaun sa user request kar raha hai usse identify karke req.user variable me store karna , toh req.user se uska id use karenge

  const id = req.user.id; // yaha pe jo bhi user request kar raha hai usska id nikal liya


  const username = req.params.username; //  req.params.username => URL mein jo ":username" tha woh yahan milta hai 

}

module.exports = {
  followUserController,
};
