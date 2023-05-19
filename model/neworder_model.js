// creting user model for signin 
// import mongoose and db file.
const db=require('../config/db');
const mongoose= require('mongoose');
const userModel =require("../model/user_model");
const { json } = require('body-parser');
const { array } = require('../middleware/uploads');
//create user schema
const { Schema } = mongoose;

// creating email and password similar to sql table type of data.

const newOrderSchema =new Schema({
    email:{
        type: Schema.Types.String,
        ref:userModel.modelName,
    },
    orderId:{
        type:String,
        required:true,
        //unique:true,      
    },
    customerName:{
        type:String,
        require:true,
    },
    orderDetail:{
        type: Array,
        require:true,
    }
    /* orderDetail:[{
        SrNo:String,
        ItemName:String,
        Qty:String,
        UOM:String,
        Price:String,
        Disc:String,
        Amt:String,
    }
    ] */
},{timestamps: true});

//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const newOrderModel =db.model("newOrderData",newOrderSchema);
//export file 
module.exports = newOrderModel;