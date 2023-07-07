const Item = require('../models/Item');
const { mapDataSet } = require('../middleWare/util');
const db = require('../db.js');


//재고설정
exports.setItem = (req, res) => {
    let item = new Item;

    item.itemStock = mapDataSet(req.body.items, req.body.itemStock);
    item.itemPrice = mapDataSet(req.body.items, req.body.itemPrices);

    console.log(item);
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

//재고업데이트
exports.updateStock = () => {

};

//재고 초기화
exports.resetStock = () => {

};


