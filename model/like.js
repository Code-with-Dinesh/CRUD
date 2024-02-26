const mongoose = require("mongoose")

const likeschema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    user:{
        type:String,
        required:true
    }
})

const like = mongoose.model("like",likeschema)
module.exports = like;