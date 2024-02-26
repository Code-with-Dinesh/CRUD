const Post = require("../model/post.js");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedpost = await post.save();
    res.status(200).json({
      data: savedpost,
      message: "Post Created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while created the post",
    });
  }
};
// view all post
exports.showpost = async (req, res) => {
  try {
    const allpost = await Post.find();
    res.status(200).json({
      data: allpost,
      message: "All post fetch successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error while fetching all post",
    });
  }
};
