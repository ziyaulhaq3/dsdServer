const addCustomerModel =require("../model/addCustomer_model");
class addCustomerServices{
    static async saveCustomer(
        email,
        customerCode,
        name,
        street,
        contactNo,
        vatNo,
        mode,
        crdeitLimit,
    ){
        const saveCustomer=new addCustomerModel({
            email,
            customerCode,
            name,
            street,
            contactNo,
            vatNo,
            mode,
            crdeitLimit,
        });
        return await saveCustomer.save();
    }
    static async getCustomerData(email){
        const getcustomerdata = await addCustomerModel.find({email})
        return getcustomerdata;
    }
    static async deleteCustomerData(id){
        const deletecustomerdata = await addCustomerModel.findOneAndRemove({id})
        return deletecustomerdata;
    }
}
module.exports = addCustomerServices
