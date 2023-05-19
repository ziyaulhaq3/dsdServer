const addProductModel =require("../model/addproduct_model");
class addproductServices{
    static async saveProduct(
        email,Image,barcode,productName,stock,productPrice,
        
    ){
        const saveProduct=new addProductModel({email,Image,barcode,productName,stock,productPrice,});/*if(req.file){saveProduct.Image=req.file.path};*/
        return await saveProduct.save();
    }
    static async getProductData(email){
        const getproductdata = await addProductModel.find({email})
        return getproductdata;
    }
    static async deleteProductData(id){
        const deleteProductdata = await addProductModel.findOneAndRemove({id})
        return deleteProductdata;
    }
    static async getProductDatabarcode(){
        const getproductdatabar = await addProductModel.find({})
        return getproductdatabar;
    }
    static async getProductDataname(productName){
        const getproductdataname = await addProductModel.find({productName})
        return getproductdataname;
    }
}
module.exports = addproductServices
