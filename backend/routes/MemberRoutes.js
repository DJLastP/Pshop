const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/MemberController');

router.post('/join', MemberController.join);
router.post('/login', MemberController.login);
router.get('/access', MemberController.access);

module.exports = router;