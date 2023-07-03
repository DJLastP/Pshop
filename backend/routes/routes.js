var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');
var adminController = require('../controllers/AdminController');

router.get('/user', userController.createuser);
router.post('/setPrice', adminController.setPrice);
router.get('/getPrice', adminController.getPrice);
//route.post('/admin', '보낼컨트롤러메소드');

module.exports = router;