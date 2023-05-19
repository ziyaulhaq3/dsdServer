//call model from the db model created (import )
const userModel =require('../model/user_model');
const jwt=require('jsonwebtoken');
// we create a class
class userService{
    //we create a static asyn function that takes parameters as follows.
    static async registerUser(email,password){
        // we try 
        try{
            //insert or create an meathod to add new user 
            const createUser = new userModel({email,password});
            //saving the data at backend
            return await createUser.save();
        }catch(err){
            throw err;
        }
        
    }
    //checking the email.
    static async checkUser(email){
        try{
            //check if there is email present in db.
            return await userModel.findOne({email});
        }catch(error){
            throw error
        }
    }
    //creating a token for login. using jwt takes tokendata from controller,secretkey,jstexpiry are auto genrated
    static async genratetoken(tokendata,secretkey,jwtexpire){
        return jwt.sign(tokendata,secretkey,{expiresIn:jwtexpire});
    }
}

module.exports = userService;