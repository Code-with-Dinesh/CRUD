const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"  // refer the post model 
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})

const comment = mongoose.model("comment",commentSchema)
module.exports = comment