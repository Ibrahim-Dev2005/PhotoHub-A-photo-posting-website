const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const Posts = mongoose.model("Posts")
const authorizedlogin = require("../middlewares/authorizedlogin")

router.get("/allposts",(req,res)=>{
    Posts.find().populate("postedBy","_id name").then((allposts)=>{   //Posts.find() to find all posts .populate to only show name of user
        res.json({allposts})
    }).catch(err=>{
        console.log("error")
    })
})


router.post("/createpost",authorizedlogin,(req,res)=>{
    const {title,body,pic} = req.body
    if(!title || !body || !pic){                                             //destructure title and body from body
        return res.status(422).json({error:"enter field correctly"})
    }
    req.User.password = undefined                             //using this method so we dont show password to other
    
        const post = new Posts({
            title,                                           //creating new posts
            body,
            photo:pic,
            postedBy:req.User
        })
        post.save().then((savedpost)=>{
            res.json({post:savedpost})                    //savingposts
        }).catch(err=>{
            console.log(err)
        })
    
})

router.get("/postsbyme",authorizedlogin,(req,res)=>{
    Posts.find({postedBy:req.User._id}).populate('postedBy','_id name').then((myposts)=>{
        res.json({myposts})
    }).catch((err)=>{
        console.log("error")
    })

})
module.exports=router