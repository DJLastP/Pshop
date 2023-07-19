const Item = require('../models/Item');
const Group = require('../models/group');
const { mapDataSet } = require('../middleWare/util');
const db = require('../db.js');
const jwt = require("jsonwebtoken");
const Member = require("../models/Member");

//재고설정
exports.setItem = (req, res) => {
    let item = new Item;

    item.itemStock = mapDataSet(req.body.items, req.body.itemStock);
    item.itemPrice = mapDataSet(req.body.items, req.body.itemPrices);

    item.save().then((result) => {
        res.json(result);
        });
};

//재고조회
exports.getItem = (req, res) => {
    Item.findOne().sort({ date: -1}).then(result =>{
        res.json(result)
    });
}

//그룹조회
exports.getGroup = async (req, res) => {
    await Group.findOne().sort({ date: -1}).then(result =>{
        res.json(result)
    });
}
//그룹설정
exports.setGroup = async (req, res) => {

    let group = new Group;
    group.groupInfo = req.body

    await group.save().then(result =>{
        res.json(result);
    }).
    catch(err => {
        res.json(err);
    });
}
//상품가격
exports.getPrice = async (req, res) => {
    try {

        //토근정보저장
        const token = req.body.accessToken;
        //토큰이 없을때
        if (token == null) {
            return res.status(400).json({error: '엑세스토큰없음'});
        }
        //토큰검증 및 사용자정보 추출
        const data = await jwt.verify(token, process.env.ACCESS_SECRET);
        //토큰으로 사용자정보 가져오기
        let memberInfo = await Member.findOne({memId: data.memInfo.memId}).select(['memLevel'])
            .then()
            .catch(err => {
                res.status(400).json({ error: '엑세스검증실패'});
            });
        const itemInfo = await Item.findOne().sort({date: -1})
        const groupInfo = await Group.findOne().sort({date: -1});
        let itemPrice = {};

        Object.keys(itemInfo.itemPrice).forEach(key => {
            itemPrice[key] = itemInfo.itemPrice[key] + parseInt(groupInfo.groupInfo[memberInfo.memLevel]);
        });

        let result = {itemPrice, 'itemStock' : itemInfo.itemStock};

        res.json(result);
    } catch (e) {
        res.status(400).json({ error: '엑세스토큰없음'});
    }
}

//재고업데이트
exports.updateStock = () => {

};

//재고 초기화
exports.resetStock = () => {

};


