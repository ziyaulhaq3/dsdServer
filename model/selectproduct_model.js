// creting user model for signin 
// import mongoose and db file.
const db=require('../config/db');
const mongoose= require('mongoose');
const addProductModel =require("../model/addproduct_model");
//create user schema
const { Schema } = mongoose;

// creating email and password similar to sql table type of data.

const selectProductSchema =new Schema({
    barcode:{
        type:Schema.Types.String,
        ref:addProductModel.modelName   
    },
    stock:{
        type:Number,
        require: true
    },
    quantity:{
        type:Number,
        require:true,
    },
    
    uom:{
        type:String,
        require:true,
    },
    
    price:{
        type:Number,
        require:true,
    },
    
    discount:{
        type:Number,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },    
});

//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const selectProductModel =db.model("selectproduct",selectProductSchema);
//export file 
module.exports = selectProductModel;




/*stock,quantity,uom,price,discount,Totalprice,amount*/ 

