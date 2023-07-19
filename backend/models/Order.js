const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = mongoose.Schema({
    orderCnt : { type: Object, required: true },
    orderPrice : { type: Object, required: true },
    orderId : { type: ObjectId, ref: 'Member' ,required: true },
    memId : { type: String, required: true },
    totalPrice : { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Order', orderSchema);
module.exports = Stock;