const addnewOrderServices = require("../services/newOrder_services");
exports.addneworder = async(req,res,next)=>{
    try{
        const {
            email,
            orderId,
            customerName,
            orderDetails
        }=req.body;
        let add = await addnewOrderServices.saveNewOrder(
            email,
            orderId,
            customerName,
            orderDetails
        );
        res.json({status:true,success:add});
        //res.urlencoded({status:true,success:add})
    }catch(error){
        next(error);
    }
}
exports.getnewOrder = async(req,res,next)=>{
    try{
        const {email}=req.body;
        let get = await addnewOrderServices.getnewOrderData(email);
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}
exports.deletenewOrder = async(req,res,next)=>{
    try{
        const {id}=req.body;
        let deleted = await addnewOrderServices.deletenewOrderData(id);
        res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}