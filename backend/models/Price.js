const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    itemPrices : { type: Object, required: true },
    date: { type: Date, default: Date.now }
});

const Price = mongoose.model('Price', priceSchema);
module.exports = Price;