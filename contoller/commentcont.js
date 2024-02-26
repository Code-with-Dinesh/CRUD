const Comment = require("../model/comment.js");
const Post = require("../model/post.js");

// business logic
exports.createComment = async (req, res) => {
  try {
    const { user, body, post } = req.body;
    const comment = new Comment({ user, body, post });
    const savecomment = await comment.save();
    const updatepost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savecomment._id } },
      { new: true }
    ).populate("comments");
    res.status(200).json({
      data: updatepost,
      message: "Comment added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error while create comments",
    });
  }
};
// dummy route  for testing and we perfom on the get requrest
exports.dummy = (req, res) => {
  res.send("This is my dummy route");
};
