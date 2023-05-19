const router =require("express").Router();
//specified the lib
const addCustomerController = require("../controllers/addCustomer_controller");
router.post("/addcustomer",addCustomerController.addcustomer);
router.post("/getcustomerdata",addCustomerController.getCustomer);
router.post("/deletecustomerdata",addCustomerController.deleteCustomer);

module.exports = router;
