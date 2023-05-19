const newOrderModel =require("../model/neworder_model");
class addneworderServices{
    static async saveNewOrder(
        email,
        orderId,
        customerName,
        orderDetail,        
    ){
        const saveNewOrder=new newOrderModel({
            email,
            orderId,
            customerName,
            orderDetail,            
        });
        return await saveNewOrder.save();
    }
    static async getnewOrderData(email){
        const getOrderData = await newOrderModel.find({email})
        return getOrderData;
    }
    static async deletenewOrderData(id){
        const deleteneworderdata = await newOrderModel.findOneAndRemove({id})
        return deleteneworderdata;
    }
}
module.exports = addneworderServices
