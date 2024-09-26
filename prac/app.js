const express = require('express')
const app=express()
const PORT = 5000
const mongoose=require('mongoose')
const {MONGOURI} = require("./keys")


mongoose.connect(MONGOURI).then(()=>console.log('Connected to MongoDB')).catch((err)=>console.log("Error connecting to MongoDB"));

app.use(express.json())
require('./models/users')
require('./models/posts')

app.use(require('./routes/auth'))
app.use(require('./routes/postroute'))




app.listen(PORT,()=>{
    console.log("Server is running on 5000 port",PORT)
})