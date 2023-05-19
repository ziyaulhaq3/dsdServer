const router =require("express").Router();
//specified the lib
const addnewOrderController = require("../controllers/newOrder_controller");
router.post("/addnewOrder",addnewOrderController.addneworder);
router.post("/getnewOrderdata",addnewOrderController.getnewOrder);
router.post("/deletenewOrderdata",addnewOrderController.deletenewOrder);

module.exports = router;
