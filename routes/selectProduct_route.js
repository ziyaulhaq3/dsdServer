const router =require("express").Router();
//specified the lib
const selectProductController = require("../controllers/selectProduct_controller");
router.post("/selectProduct",selectProductController.saveSelect);
router.get("/getselctProductdatabarcode",selectProductController.getselectproductbarcode);
router.post("/deleteSelectProductdata",selectProductController.deleteSelectProduct);
router.post("/getselectProducts",selectProductController.getselectproducts);
module.exports = router;