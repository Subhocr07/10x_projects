const mongoose=require("mongoose");

const postSchema= new mongoose.Schema({
    name:String,
    location:String,
    likes:String,
    description:String,
    postImg:String,
    date:{ type: Date, default: Date.now },
});

const postModel=mongoose.model("post",postSchema);

module.exports=postModel;