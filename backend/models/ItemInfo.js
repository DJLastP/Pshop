const mongoose = require('mongoose');

const setItemSchema = mongoose.Schema({
    items : { type: Object, required: true },
    itemCnt : { type: Number, require: true},
    date: { type: Date, default: Date.now }
});

const ItemInfo = mongoose.model('ItemInfo', setItemSchema);
module.exports = ItemInfo;