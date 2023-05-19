const selectProductModel =require("../model/selectproduct_model");
class selectproductServices{
    static async saveSelectProduct(
       barcode,stock,quantity,uom,price,discount,Total,amount
    ){
        const saveSelectProduct=new selectProductModel({
            barcode,stock,quantity,uom,price,discount,Total,amount
        });
        return await saveSelectProduct.save();
    }
    static async getselectProductData(barcode){
        const getselectProductdata = await selectProductModel.find({barcode})
        return getselectProductdata;
    }
    static async deleteselectProductData(){
        const deleteAllSelectProductdata = await selectProductModel.deleteMany({})
        return deleteAllSelectProductdata;
    }
    static async getselectProducts(){
        const getselectProducts = await selectProductModel.find({})
        return getselectProducts;
    }
}
module.exports = selectproductServices
