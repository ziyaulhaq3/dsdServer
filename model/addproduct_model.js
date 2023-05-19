const mongoose= require('mongoose');
const db=require('../config/db');


const userModel =require("../model/user_model");
//create user schema
const { Schema } = mongoose;

// creating email and password similar to sql table type of data.

const addProductSchema = new Schema({
    email:{
        type:Schema.Types.String,
        ref:userModel.modelName
    },
    Image:{
        type: String,
        require:true,

    },
    barcode:{
        type: String,
        require:true
    },
    productName:{
        type:String,
        require:true,
    },
    stock:{
        type: Number,
        require:true,
    },
    productPrice:{
        type: Number,
        require:true,
    }, 
},{timestamps:true,});

//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const addProductModel =db.model("addProduct",addProductSchema);
//export file 
module.exports = addProductModel;
