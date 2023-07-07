const ItemInfo = require('../models/ItemInfo');


//상품설정
exports.setItemInfo = (req, res) => {

    let itemInfo = new ItemInfo;
    itemInfo.items = req.body.items;
    itemInfo.itemCnt = req.body.itemCnt;

    itemInfo.save().then((result)=>{

        console.log('가격정보 저장 성공');
        res.json(result.body);
    });
}

//상품명리스트 가져오기
exports.getItemInfo = (req, res) => {
    ItemInfo.findOne().sort({ date: -1}).then(result =>{
        res.json(result);
    });
}