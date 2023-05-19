const addPaymentServices = require("../services/addPayment_services");

exports.addpayment = async(req,res,next)=>{
    try{
        const {
            email,
            paymentId,
            //date,
            customerName,
            amount,
            balance,
            //totalAmount,
        }=req.body;
        let add = await addPaymentServices.savePayment(
            email,
            paymentId,
            //date,
            customerName,
            amount,
            balance,
            //totalAmount,
        );
        res.json({status:true,success:add});
    }catch(error){
        next(error);
    }
}
exports.getpayment = async(req,res,next)=>{
    try{
        const {email}=req.body;
        let get = await addPaymentServices.getPaymentData(email);
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}