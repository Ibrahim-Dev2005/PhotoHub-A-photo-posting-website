const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const postScheme =  new mongoose.Schema({
    postedBy:{
        type:ObjectId,
        ref:"User"
    },

    title:{
        type:String,
        required:true

    },

    body:{
        type:String,
        required:true

    },
    photo:{
        type:String,
        required:true
    }


})

mongoose.model("Posts",postScheme)