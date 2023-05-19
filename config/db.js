//import mongoose
const  mongoose = require("mongoose");
const multer = require('multer');
// connection with backend established and also check wheter ist connnected or not using on function.
//change local host with 127.0.0.1 and add name of db after port / dbname eg:- newtodo
const connection =mongoose.createConnection('mongodb://127.0.0.1:27017/newtodo').on("open",()=>{
    console.log("connected to mongo ");}).on("error",()=>{
        console.log('mongodb not conneted');
    });    
// exports mongodb connection to use anywhere.
module.exports = connection;
