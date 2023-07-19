const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');


router.post('/setOrder', orderController.setOrder);
router.get('/getUserOrder', orderController.getUserOrder);
router.get('/getOrderList', orderController.getOrderList);
module.exports = router;