const addPaymentModel =require("../model/payment_model");

class addPaymentServices{
    static async savePayment(
        email,
        paymentId,
        //date,
        customerName,
        amount,
        balance,
        //totalAmount,
    ){
        const savePayment = new addPaymentModel({
            email,
            paymentId,
            //date,
            customerName,
            amount,
            balance,
            //totalAmount,
        });
        return await savePayment.save();

    }
    static async getPaymentData(email){
        const getpaymentdata = await addPaymentModel.find({email})
        return getpaymentdata;
    }
}
module.exports = addPaymentServices
