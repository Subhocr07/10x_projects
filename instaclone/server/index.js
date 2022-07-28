const express=require("express");
const mongoose = require("mongoose");
const postModel = require ("./schema")
const cors =require ("cors");
const multer =require ("multer");
// const bodyParser=require("body-parser")
const port=process.env.PORT || 8080;

//////////////////define application//////////////////////////////
const app=express();
/////////////////Body parser////////////////////////////////////
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ limit:'50mb',extended:true}));
/////////////////server//////////////////////////////////////////////
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server started at ${port}`);
    }else{
        console.log(err);
    }
});
//////////////////connect to DB///////////////////////////////////////////////
mongoose.connect("mongodb+srv://InstaCluster:Subho2022@instaclauster.xpboj.mongodb.net/?retryWrites=true&w=majority",(data)=>{
    console.log("succesfully connected");
},(err)=>{
    console.log(err)
});

//base route
app.get("/",(req,res)=>{
    res.send("instaclone application")
});

////////////////////save to db////////////////////////////////////
app.post("/createpost",(req,res)=>{
    postModel.create({
        author:req.body.author,
        location:req.body.location,
        description:req.body.description,
        image:req.body.image
    }).then((data)=>{
            res.status(200).send(data)
    })
});

/////////////////////////////////data get from db///////////////////////////////////
app.get("/postall",(req,res)=>{
    postModel.find()
        .then((imageData)=>{
            // console.log({posts})
            res.status(200).send({imageData})
        }).catch((err)=>{
            console.log(err)
        })
});
