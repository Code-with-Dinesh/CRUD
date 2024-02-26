const Post = require("../model/post.js")
const Like = require("../model/like.js")
exports.createlike = async(req,res) =>{
    try {
        const {user,post} = req.body;
        const like = new Like({user,post})
        const savelike = await like.save()
        const updatelike = await Post.findByIdAndUpdate(post,{$push:{likes:savelike._id}},{new:true}).populate("likes")
        res.status(200).json({
            data:updatelike,
            message:"Like post added successfully"
        })
    } catch (error) {
        res.status(400).json({
            message:"Error while creating like"
        })
    }
}