const express = require("express");
//creating a body parser to know what data to send
const body_parser= require('body-parser');
const userRouter =require('./routes/user_route');

const addCustomerRouter =require('./routes/addCustomer_route');
const addPaymentRouter = require("./routes/addPayment_route");
const addProductRouter = require("./routes/addProduct_route");
const selectProductRouter = require("./routes/selectProduct_route");
const newOrderRouter = require("./routes/newOrder_routes");
const app = express();

//req.body call form controller
app.use(body_parser.json());

app.use('/',userRouter);
app.use("/",addCustomerRouter);
app.use("/",addPaymentRouter);
app.use("/",addProductRouter);
app.use('/uploads',express.static('/uploads'));
app.use('/',selectProductRouter);
app.use('/',newOrderRouter);

module.exports = app;
