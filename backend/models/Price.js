var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var priceSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, unique: true},
    itemPrices : { type: Object, required: true },
    date: { type: Date, default: Date.now }
});

var Price = mongoose.model('Price', priceSchema);

module.exports = Price;