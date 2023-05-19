// creting user model for signin 
// import mongoose and db file.
const mongoose= require('mongoose');
const db=require('../config/db');
const userModel =require("../model/user_model");
//create user schema
const { Schema } = mongoose;

// creating email and password similar to sql table type of data.

const addCustomerSchema =new Schema({
    email:{
        type:Schema.Types.String,
        ref:userModel.modelName
    },
    customerCode:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type: String,
        require:true
    },
    street:{
        type:String,
        require:true,
    },
    contactNo:{
        type: String,
        require:true,
    },
    vatNo:{
        type: String,
        require:true,
    },
    mode:{    
        type: String,
        require:true,
    },
    crdeitLimit:{
        type: String,
        require:true,
    },
},{timestamps:true});

//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const addCustomerModel =db.model("addCustomer",addCustomerSchema);
//export file 
module.exports = addCustomerModel;
