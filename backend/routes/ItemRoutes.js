const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');

//재고설정
router.post('/setItem', itemController.setItem);
router.get('/getItem', itemController.getItem);
router.post('/setGroup', itemController.setGroup);
router.post('/getItemPrice', itemController.getPrice);
router.get('/getGroup', itemController.getGroup);

module.exports = router;