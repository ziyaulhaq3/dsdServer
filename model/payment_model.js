// creting user model for signin 
// import mongoose and db file.
const mongoose= require('mongoose');
const db=require('../config/db');
const userModel =require("../model/user_model");
//create user schema
const { Schema } = mongoose;

// creating email and password similar to sql table type of data.

const addPaymentSchema =new Schema({
    email:{
        type:Schema.Types.String,
        ref:userModel.modelName
    },
    paymentId:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type: Date,
        default:Date.now,
    
        //required:true,
    },
    customerName:{
        type:String,
        require:true,
    },
    amount:{
        type: Number,
        require:true,
    },
    balance:{
        type: Number,
        require:true,
    },
    
},{timestamps:true});

//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const addPaymentModel =db.model("addPayment",addPaymentSchema);
//export file 
module.exports = addPaymentModel;

