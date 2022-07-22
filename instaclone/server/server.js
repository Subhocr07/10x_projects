const express=require("express");
const mongoose = require("mongoose");
const postModel = require ("./schema")
const port=8080;


const app=express();
//server
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server started at ${port}`);
    }else{
        console.log(err);
    }
});
//body parser  middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));//false means not passing object 

//connect to DB
mongoose.connect("mongodb://localhost/instaclone",(data)=>{
    console.log("succesfully connected");
},(err)=>{
    console.log(err)
});

//base route
app.get("/",(req,res)=>{
    res.send("instaclone application")
});

app.post("/createpost",(req,res)=>{
    postModel.create({
        name:req.body.name,
        location:req.body.location,
        likes:req.body.likes,
        description:req.body.description,
        postImg:req.body.postImg,
        date:req.body.date,
    }).then(()=>{
        res.status(200).send("Post upload succesfully")
    }).catch((err)=>{
        res.status(400).send(err)
    });
});
