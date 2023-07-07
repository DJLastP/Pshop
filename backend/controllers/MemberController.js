const Member = require('../models/Member');
const bodyParser = require('body-parser');
const db = require('../db.js');

exports.join = (req, res) => {

    let member = new Member;
    const { memId, memPw, memTell } = req.body;
    member.memId = memId;
    member.memPw = memPw;
    member.memTell = memTell;

    member.save().then(result => {
        res.json(result);
    });
    res.json('성공');

}

exports.login = (req, res) => {

    const { memId, memPw } = req.body;
    Member.findOne({memId,}).then(result => {
        console.log(result.memPw);

        if(memPw === result.memPw){
            let loginInfo = {
                _id: result._id,
                memRole: result.memRole
            };
            res.json(loginInfo);
        }
    })

}

