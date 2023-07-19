const Order = require('../models/Order.js');
const Item = require('../models/Item.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const bodyParser = require('body-parser');
const db = require('../db.js');
const jwt = require("jsonwebtoken");
const Member = require("../models/Member");

//신규주문추가
exports.setOrder = async (req, res) => {
    try {
        const data = req.body;
        let token = req.headers.authorization;
        if (token && token.startsWith('Bearer ')) {
            // "Bearer " 부분을 제거하고 토큰만 추출
            token = token.slice(7);
        }
        const memInfo = await jwt.verify(token, process.env.ACCESS_SECRET);
        
        //주문정보세팅
        let order = new Order;
        order.orderId = memInfo.memInfo._id;
        order.memId = memInfo.memInfo.memId;
        order.orderCnt = data.orderCnt;
        order.orderPrice = data.orderPrice;
        order.totalPrice = data.totalPrice;

        await order.save();

        let updateObject = {};
        for (const [key, value] of Object.entries(data.orderCnt)) {
            updateObject[`itemStock.${key}`] = -value;
        }
        // 데이터 비교와 차감 로직
        await Item.findOne({}, {}, { sort: { _id: -1 } }) // 최근에 등록된 도큐먼트 하나만 가져오기
            .then(async (latestItem) => {
                if (!latestItem) {
                    res.status(400);
                    return;
                }
                // 최근에 등록된 도큐먼트의 itemStock과 newData를 비교하여 값 차감하기
                for (const [key, value] of Object.entries(data.orderCnt)) {
                    if (latestItem.itemStock && latestItem.itemStock[key]) {
                        latestItem.itemStock[key] -= value;
                    }
                }
                // 수정된 데이터를 업데이트
                await Item.updateOne({ _id: latestItem._id }, { $set: { itemStock: latestItem.itemStock } })
            });

        res.json('주문성공');
    } catch (e) {
        res.status(400).json(e);
    }

}

//회원주문리스트
exports.getUserOrder = async (req, res) => {
    try {
        const data = req.body;
        let token = req.headers.authorization;
        if (token && token.startsWith('Bearer ')) {
            // "Bearer " 부분을 제거하고 토큰만 추출
            token = token.slice(7);
        }
        const memInfo = await jwt.verify(token, process.env.ACCESS_SECRET);

        let orderList = await Order.find({ memId: memInfo.memInfo.memId }).sort({ date: -1});
        res.json(orderList);
    }
    catch (e) {
        res.status(400)
    }
}

//전체회원주문리스트
exports.getOrderList = async (req, res) => {
    try {
        const data = req.body;
        let token = req.headers.authorization;
        if (token && token.startsWith('Bearer ')) {
            // "Bearer " 부분을 제거하고 토큰만 추출
            token = token.slice(7);
        }
        const memInfo = await jwt.verify(token, process.env.ACCESS_SECRET);
        
        if(memInfo.memInfo.memRole !== 'ADMIN') {
            res.status(400).json('관리자가 아님');
            return;
        }

        let orderList = await Order.find({}).sort({ date: -1});
        res.json(orderList);
    }
    catch (e) {
        res.status(400)
    }

}
