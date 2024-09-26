const express = require('express')
const router = express.Router()               
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWTSECRETTOKEN} = require('../keys')
    


router.post("/signup",(req,res)=>{                          //creating signup route 
    const {name,email,password} = req.body                   
    if(!name || !email || !password){                       //checking if field are empty or not
        res.status(422).json({error:"Please Enter All Fields Correctly"})
    }
    
    User.findOne({email:email}).then((savedUser)=>{        //checking if user email already exists or not
        if(savedUser){
            res.status(433).json({message:"user already exists"})
        }

        bcrypt.hash(password,12).then((hashedpassword)=>{         //using bcrypt to hash the passwords
            const newuser = new User({                            //if user doesnt exists create new user by using new User command and storing in newuser const
                name,
                email,
                password:hashedpassword,
            })
    
            newuser.save().then((user =>{                   //if email doesnt exits registering new user details to database
                res.json({message:'saved successfully'})
            })).catch((err=>{
                console.log("Error")
            }))

        }).catch((err)=>{
            console.log("error")
        })
        


    }).catch(err=>{
        console.log("error")
    })

})

router.post("/signin",(req,res)=>{              //creating sign in route byusing post method
    const {email,password} = req.body           //destructuring the email and password recieved from res.body
    if(!email || !password){                    //if email and password are null give error
        return res.status(433).json({error:"Please enter all the fields correctly"})   
    }
    User.findOne({email:email}).then(savedUser=>{            //finding saved user email in database using .findOne method
        if(!savedUser){
           return res.status(433).json({error:"Email invalid"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{  //comapring password entered by user with savedpassword
            if(doMatch){
               //res.json({message:"Logged in successfully"})
               const token = jwt.sign({_id:savedUser._id},JWTSECRETTOKEN)
               const {_id,name,email} = savedUser
               res.json({token,user:{_id,name,email}})

            }
            else{
                return res.json({error:"Invalid password"})
            }

        }).catch(err=>{
            console.log("Error1")
        })
    }).catch(err=>{
        console.log("Error")})
    
})




module.exports = router