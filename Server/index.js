const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const userRouter = require('./Routes/user.route')
const cors = require('cors')
const bodyParser = require('body-parser');
const { json } = require('express');
const cloudinary = require('cloudinary')
app.use(bodyParser.urlencoded({extended:true, limit: '100mb'}))
app.use(json({limit: '100mb'}))
app.use(cors())
const URL = process.env.URL
mongoose.connect('mongodb+srv://Johnfixit:gufaith996.com@cluster0.cflf6.mongodb.net/Capturing_db?retryWrites=true&w=majority', (err)=>{
    if(err){
        console.log(`mongoDB not connected`);
    }
    else{
        console.log(`MongoDB connected`);
    }
})
app.use('/', userRouter)


app.listen(PORT, ()=>{
    console.log(`Server is listen on port ${PORT}`);
})