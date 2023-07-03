const User = require('../models/Users');
const Price = require('../models/Price');
const bodyParser = require('body-parser');
var db = require('../db.js');

exports.goMain = (req, res) => {
}
//테스트
exports.createuser = (req, res) => {
    let a = { _id: 1 };

    User.find(a).then(result => {
        console.log(result);
        res.json(result);
    });
}

exports.setPrice = (req, res) => {
    var prices = new Price;

    prices.itemPrices = req.body;

    prices.save().then(result => {
        console.log("가격정보 저장 성공");
        res.json("success");
    });
}

exports.getPrice = (req, res) => {

    Price.findOne().sort({ date: -1}).then(result =>{
        console.log(result);
        res.json(result);
    });

}

