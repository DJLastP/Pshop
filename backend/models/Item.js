const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemStock : { type: Object, required: true, unique: false },
    itemPrice : { type: Object, required: true },
    ordered : { type: Object, required: false },
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;