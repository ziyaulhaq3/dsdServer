const addCustomerServices = require("../services/addCustomer_services");
exports.addcustomer = async(req,res,next)=>{
    try{
        const {
            email,
            customerCode,
            name,
            street,
            contactNo,
            vatNo,
            mode,
            crdeitLimit,
        }=req.body;
        let add = await addCustomerServices.saveCustomer(
            email,
            customerCode,
            name,
            street,
            contactNo,
            vatNo,
            mode,
            crdeitLimit,   
        );
        res.json({status:true,success:add});
    }catch(error){
        next(error);
    }
}
exports.getCustomer = async(req,res,next)=>{
    try{
        const {email}=req.body;
        let get = await addCustomerServices.getCustomerData(email);
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}
exports.deleteCustomer = async(req,res,next)=>{
    try{
        const {id}=req.body;
        let deleted = await addCustomerServices.deleteCustomerData(id);
        res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}