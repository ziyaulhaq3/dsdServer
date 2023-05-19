// creting user model for signin 
// import mongoose and db file.
const mongoose= require('mongoose');
const db=require('../config/db');
const bcrypt = require("bcrypt");
//create user schema
const { Schema } = mongoose;
// creating email and password similar to sql table type of data.
const userSchema =new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        require:true

    }
},{timestamps: true});
//encrpyt password.
userSchema.pre('save',async function(){
    try{
        var user =this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);
        user.password =hashpass;
    }catch(error){
        throw error;
    }
})
//compare user password.
userSchema.methods.comparePassword = async function(userPassword){
    try {
        //function to compare user password.
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    }catch(error){throw error;}
}



//calling db and creating this schema  const user model = db.model("db collection name,Schema name)".
const userModel =db.model("user",userSchema);
//export file 
module.exports = userModel;