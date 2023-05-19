const addproductServices = require("../services/addproduct_services");

exports.addproduct = async(req,res,next)=>{
    try{
        const {
            email,Image,barcode,productName,stock,productPrice

        }=req.body;
        let add = await addproductServices.saveProduct(
            email,Image,barcode,productName,stock,productPrice  
        );if(req.file){
            add.Image = req.file.path
        };
        res.json({status:true,success:add});
    }catch(error){
        next(error);
    }
}
//addproduct.Image = fs.readFileSync(req.file.path);
//var encode_img = Image.toString('base64');

exports.getproduct = async(req,res,next)=>{
    try{
        const {email}=req.body;
        let get = await addproductServices.getProductData(email);
        res.json({status:true,success:get});
    }catch(error){
        next(error);
    }
}
exports.deleteproduct = async(req,res,next)=>{
    try{
        const {id}=req.body;
        let deleted = await addproductServices.deleteProductData(id);
        res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}
exports.getproductbar = async(req,res,next)=>{
    try{
        //const {barcode}=req.body;
        let getbar = await addproductServices.getProductDatabarcode();
        //let barcode = await addproductServices.getProductDatabarcode(barcode)
        res.json({status:true,success:getbar});
    }catch(error){
        next(error);
    }
}
exports.getproductname = async(req,res,next)=>{
    try{
        const {productName}=req.body;
        let getname = await addproductServices.getProductDataname(productName);
        //let barcode = await addproductServices.getProductDatabarcode(barcode)
        res.json({status:true,success:getname});
    }catch(error){
        next(error);
    }
}
