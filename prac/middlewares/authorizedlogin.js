const jwt = require('jsonwebtoken')
const {JWTSECRETTOKEN} = require("../keys")
const mongoose = require('mongoose')
const User = mongoose.model("User")

                                           //authorizing token for user
module.exports = (req,res,next)=>{           
    const {authorization} = req.headers        //destructure authorizarion fron headers

    if(!authorization){
        return res.status(401).json({error:"Invalid authorization"})
    }                                                        
    else{
        const token = authorization.replace("Bearer ","")
        jwt.verify(token,JWTSECRETTOKEN,(err,payload)=>{               //replace bearer with empty string
            if(err){
               return res.status(401).json({error:"Invalid Authorization"})
            }
            else{
                const {_id}=payload
                User.findById(_id).then((userdata)=>{       //destructure id(saveUser) from payload
                    req.User = userdata
                    next()
                })
            }

        })
        
    }

}