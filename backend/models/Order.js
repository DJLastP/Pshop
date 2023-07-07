const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    order : { type: Object, required: true },
    memId : { type: Object, required: true },
    totalPrice : { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Order', orderSchema);
module.exports = Stock;