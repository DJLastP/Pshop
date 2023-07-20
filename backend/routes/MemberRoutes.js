const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/MemberController');

router.post('/join', MemberController.join);
router.post('/login', MemberController.login);
router.post('/access', MemberController.access);
router.post('/refresh', MemberController.refresh);
router.get('/logout', MemberController.logout);
router.get('/memInfo', MemberController.memInfo);
router.post('/updateIsAuth', MemberController.updateIsAuth);
router.post('/updateGroup', MemberController.updateGroup);
router.get('/getNotify', MemberController.getNotify);
router.post('/setNotify', MemberController.setNotify);
router.get('/getMyPage', MemberController.myPage);

module.exports = router;