const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const priceController = require('../controllers/priceController');

router.post('/setPrice', priceController.setPrice);
router.get('/getPrice', priceController.getPrice);
router.get('/getPriceList', priceController.getPriceList);

module.exports = router;