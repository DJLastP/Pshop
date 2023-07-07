const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    memId : { type: String, required: true, unique: true },
    memPw : { type: String, required: true },
    memTell : { type: String, required: true },
    memRole : { type: String, required: true, default: 'USER' },
    isAuth : { type: String, required: true, default: 'N' },
    regDate: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Member', memberSchema);
module.exports = Stock;