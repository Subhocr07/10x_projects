const express=require("express");
const mongoose = require("mongoose");
const postModel = require ("./schema")
const cors =require ("cors");
const multer =require ("multer");
// const bodyParser=require("body-parser")
const port=process.env.PORT || 8080;




const app=express();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ limit:'50mb',extended:false}));
//server
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server started at ${port}`);
    }else{
        console.log(err);
    }
});
//body parser  middleware

//false means not passing object 

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//connect to DB
mongoose.connect("mongodb+srv://InstaCluster:Subho2022@instaclauster.xpboj.mongodb.net/?retryWrites=true&w=majority",(data)=>{
    console.log("succesfully connected");
},(err)=>{
    console.log(err)
});

//base route
app.get("/",(req,res)=>{
    res.send("instaclone application")
});
//save to db
app.post("/createpost",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            postModel.create({
                author:req.body.author,
                location:req.body.location,
                description:req.body.description,
                name:req.body.name,
                image:{
                   
                    contentType:'image/png',
                    data:req.body.filename,
                },
                date:req.body.date,
            }).then(()=>{
                res.send('succesfully uploaded image')
            }).catch((err)=>{
                console.log(err)
            })
        }
    })

    // console.log(req.body)
    // postModel.create({
    //     author:req.body.author,
    //     location:req.body.location,
    //     description:req.body.description,
    //     image:req.body.image,
    //     date:req.body.date,
    // }).then(()=>{
    //     res.status(200).redirect("/postview")
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // });
});

//data get from db
app.get("/postall",(req,res)=>{
    postModel.find()
        .then((posts)=>{
            // console.log({posts})
            res.status(200).send(posts)
        }).catch((err)=>{
            console.log(err)
        })
});

//storage
const Storage=multer.diskStorage({
    destination:'uploads',//where to upload
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
const upload=multer({
    storage:Storage,
}).single('image');