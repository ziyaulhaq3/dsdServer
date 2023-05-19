const router =require("express").Router();
//specified the lib
const upload=require("../middleware/uploads")
const addProductController = require("../controllers/product_controller");
router.post("/addproduct",upload.single('Image'),addProductController.addproduct);
router.post("/getproductdata",addProductController.getproduct);
router.post("/deleteproductdata",addProductController.deleteproduct);
router.post("/getproductdatabar",addProductController.getproductbar);
router.post("/getproductdataname",addProductController.getproductname);

module.exports = router;
