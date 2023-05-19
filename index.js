const app = require('./app');
// import db connection
const db = require('./config/db');
const port = 3000;
//import schema 
const userModel = require('./model/user_model');
const addCustomerModel = require('./model/addCustomer_model');
const addPaymentModel = require('./model/payment_model');
const addProductModel=require("./model/addproduct_model");
app.get('/',(req,res)=>{
    res.send('hello world!!!....')
});

app.listen(port,()=>{
    console.log(`server listening to port http://localhost:${port}`);
});
