const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Follower is required"],
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Followee is required"],
    },
  },
  {
    timestamps: true,
  },
);
// unique index — ek user doosre ko baar baar follow na kar sake
followSchema.index({ follower: 1, following: 1 }, { unique: true });

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;

