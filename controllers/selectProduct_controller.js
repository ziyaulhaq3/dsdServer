const selectproductServices = require("../services/selectProduct_services");

exports.saveSelect = async(req,res,next)=>{
    try{
        const {
            barcode,stock,quantity,uom,price,discount,Total,amount

        }=req.body;
        let add = await selectproductServices.saveSelectProduct(
            barcode,stock,quantity,uom,price,discount,Total,amount  
        );
        res.json({status:true,success:add});
    }catch(error){
        next(error);
    }
}
//addproduct.Image = fs.readFileSync(req.file.path);
//var encode_img = Image.toString('base64');

exports.getselectproductbarcode = async(req,res,next)=>{
    try{
        const {barcode}=req.body;
        let get = await selectproductServices.getselectProductData(barcode);
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}
exports.deleteSelectProduct = async(req,res,next)=>{
    try{
        const {}=req.body;
        let deleted = await selectproductServices.deleteselectProductData();
        res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}
exports.getselectproducts = async(req,res,next)=>{
    try{
        const {}=req.body;
        let get = await selectproductServices.getselectProducts();
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}