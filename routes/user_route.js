/*when user hits api it will call the route which will call controller finally controller will call the services the 
changes  wil occur in services then it will be shown by route*/

// import router from express
const router = require('express').Router();
//imprt userController 
const userController= require('../controllers/user_controller');
//post it on front end
router.post('/registration',userController.register);
//login api route function will get called when we hit this.
router.post('/login',userController.login);

module.exports = router;
