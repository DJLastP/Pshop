const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    itemStock : { type: Object, required: true },
    date: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;