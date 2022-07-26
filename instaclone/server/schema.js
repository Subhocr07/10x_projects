const mongoose=require("mongoose");

const postSchema= new mongoose.Schema({
    author:String,
    location:String,
    likes:String,
    description:String,
    name:String,
    image:{
        contentType:String,
        data:Buffer
    },
    date:{ type: Date, default: Date.now },
});

const postModel=mongoose.model("post",postSchema);

module.exports=postModel;