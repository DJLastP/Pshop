const User = require('../models/Users');
const Price = require('../models/Price');
const bodyParser = require('body-parser');
const db = require('../db.js');

//테스트
exports.createuser = (req, res) => {
    let a = { _id: 1 };
    User.find(a).then(result => {
        console.log(result);
        res.json(result);
    });
}

//가격설정
exports.setPrice = (req, res) => {
    let prices = new Price;
    prices.itemPrices = req.body;
    prices.save().then(result => {
        console.log("가격정보 저장 성공");
        res.json("success");
    });
}

//제일 최신 가격
exports.getPrice = (req, res) => {
    console.log(req.body);

    Price.findOne().sort({ date: -1}).then(result =>{
        console.log(result);
        res.json(result);
    });

}
//전체가격리스트 DESC
exports.getPriceList = (req, res) => {
    Price.find().sort({ date: -1}).then(result =>{
        console.log(result);
        res.json(result);
    });

}