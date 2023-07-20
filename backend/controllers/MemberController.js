const Member = require('../models/Member');
const Notify = require('../models/Notify')
const bcrypt = require('bcrypt')
const db = require('../db.js');
const jwt = require('jsonwebtoken');
const Order = require("../models/Order");
const ObjectId = require('mongodb').ObjectId;


exports.join = async (req, res) => {
    const { memId, memPw, memTell } = req.body;

    if (!memId || !memPw || !memTell) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    const userExists = await Member.findOne({ memId })

    if(userExists) {
        res.status(400)
        throw new Error('id가 이미 존재함');
    }

    // 비번 암호화
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(memPw, salt)

    // Create user
    const member = await Member.create({
        memId,
        memTell,
        memPw: hashedPassword
    })

    if(member){
        let memInfo = {
            _id: member._id,
            memId: member.memId,
            memRole: member.memRole,
        }

        memInfo.accessToken = jwt.sign({ memInfo }, process.env.ACCESS_SECRET , {
            expiresIn: '5m',
        });
        memInfo.refreshToken = jwt.sign({ memInfo }, process.env.REFRESH_SECRET , {
            expiresIn: '7d',
        })

    } else {
        res.status(400)
        throw new Error('회원가입실패')
    }

}

exports.login = async (req, res) => {

    const { memId, memPw } = req.body
    const member = await Member.findOne({ memId })
    
    if(member == null || member.isAuth === 'N'){
        res.status(400).json('가입대기중');
        return;
    }
    
    if(member && (await bcrypt.compare(memPw, member.memPw))){
            let memInfo = {
                    _id: member._id,
                    memId: member.memId,
                    memRole: member.memRole
                  };
            memInfo.accessToken = jwt.sign({ memInfo, }, process.env.ACCESS_SECRET , {
                expiresIn: '5m',
            });
            memInfo.refreshToken = jwt.sign({ memInfo, }, process.env.REFRESH_SECRET , {
                expiresIn: '7d',
            })


            res.status(200).json(memInfo)
    } else {
        res.status(400).json('실패');
    }
}
//accessToken 검증
exports.access = async (req, res) => {
    try{
        const token = req.body.accessToken;
        if(token == null){
            return res.status(400).json({ error: '엑세스토큰없음'});
        }
        const data = await jwt.verify(token, process.env.ACCESS_SECRET);
        const memberInfo = await Member.findOne({ memId: data.memId }).select(['-memPw', '-memTell'])
            .then()
            .catch(err => { 
                res.status(400).json({ error: '엑세스검증실패'});
            });
        res.json(memberInfo);
    } catch (error) {
        res.status(400).json({ error: '엑세스토큰없음'});
    }
}

//access Token은없고 refresh토큰만 있는 경우 엑세스토큰재발행
exports.refresh = async (req, res) => {
    // access toekn 을 갱신 하기위한 토큰
    try{
        const token = req.body.refreshToken;

        if(token == null){
            return res.status(500).json('리플레쉬토큰없음');
        }
        const data = await jwt.verify(token, process.env.REFRESH_SECRET);

        let memInfo = await Member.findOne({ memId: data.memInfo.memId }).select(['-memPw', '-memTell']);

        if(memInfo == null || memInfo.isAuth === 'N'){
            res.status(400).json('가입대기중');
            return;
        }


        memInfo = {
            accessToken: jwt.sign({ memInfo, }, process.env.ACCESS_SECRET , {
                expiresIn: '5m',
            }),
            refreshToken: jwt.sign({ memInfo, }, process.env.REFRESH_SECRET , {
                expiresIn: '7d',
            })
        }

        res.json(memInfo);
    } catch (error) {
        res.status(400).json({ error: '리플레쉬검증실패'});
    }
}


exports.logout = (req, res) => {

    try {
        res.cookie('accessToken', '');
        res.cookie('refreshToken', '');
        res.status(200).json('logout 성공');
    } catch (error) {
        res.status(500).json('logout 실패');
    }

}

exports.myPage = async (req, res) => {
    try {

        let token = req.headers.authorization;
        if (token && token.startsWith('Bearer ')) {
            // "Bearer " 부분을 제거하고 토큰만 추출
            token = token.slice(7);
        }
        const memInfo = await jwt.verify(token, process.env.ACCESS_SECRET);

        let result = {};

        let mem = await Member.findOne({ memId: memInfo.memInfo.memId }).sort({ date: -1}).select(['memId', 'memTell', 'regDate'])

        let orderList = await Order.findOne({ memId: memInfo.memInfo.memId }).sort({ date: -1}).select(['-memPw', '-memLevel']);
        //주문횟수
        let orderCount= await Order.countDocuments({ memId: memInfo.memInfo.memId });

        res.status(200).json({mem, orderList, orderCount});

    } catch (error) {

        res.status(500).json(error);
    }
}

exports.memInfo = async (req, res) => {

    try {
        let memberList = await Member.find({}).sort({'isAuth': 1}).select(['-memPw']);
        res.json(memberList);

    } catch (e) {
        res.json(e)
    }
}

exports.updateIsAuth = async (req, res) => {
    try {
        const data = req.body;
        data.checked ? data.isAuth = 'Y' : data.isAuth = 'N'

        await Member.updateOne( { _id: data._id  }, {$set: { isAuth: data.isAuth }} );

        res.json('업데이트 성공')

    } catch (e) {
        res.json(e)
    }
}

exports.updateGroup = async (req, res) => {
    try {
        const data = req.body;
        let result = await Member.updateOne( { _id: data._id  }, {$set: { memLevel: data.value }} )

        res.json('그룹 변경 성공')

    } catch (e) {
        res.json(e)
    }
}

//공지조회
exports.getNotify = async (req, res) => {
    try {
        await Notify.findOne().sort({ date: -1}).then(result =>{
            res.json(result)
        });

    } catch (e) {
        res.status(400);
    }
}

//공지등록
exports.setNotify = async (req, res) => {
    try {
        const data = req.body;
        let notify = new Notify(data);
        notify.save().then(result => {
            res.json(result);
        });

    } catch (e) {
        res.status(400);
    }
    
}
