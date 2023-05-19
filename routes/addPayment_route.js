const router =require("express").Router();
//specified the lib
const addPaymentController = require("../controllers/payment_controller");
router.post(
    "/addpayment",addPaymentController.addpayment
);
router.post("/getpaymentdata",addPaymentController.getpayment);
module.exports = router;