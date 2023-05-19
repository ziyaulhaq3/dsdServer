// 1st user service then this 
const userService =require('../services/user_services.js');
exports.register = async(req,res,next)=>{
    try{
        //get the data in req.body
        const {email,password}= req.body;
        // successres name of para that waits for userService to register user with email,passwrd
        const successRes = await userService.registerUser(email,password);
        //responding to frontend in json format 
        res.json({status:true , success:'User registered sucessfully'});
    }catch(error){
        throw error;
    }
}
exports.login = async(req,res,next)=>{
    try{
        //get the data in req.body. data we will pass from front end.
        const {email,password}= req.body;
        //
        const user = await userService.checkUser(email);
        //condition for user mail.
        if(!user){
            throw new Error("user does not exist.");
        }
        //condition for password.
        const isMatch = await user.comparePassword(password);
        if (isMatch === false){
            throw new Error("password invalid.");
            
        }
        let tokendata = {_id:user._id,email:user.email,password:user.password}
        //encode in jwt format (tokendata,"secretkey","time of expiry")
        const token = await userService.genratetoken(tokendata,"ziyaul","1h")
        res.status(200).json({status:true,token:token});
    }catch(error){
        throw error;
    }
    
}
