const mongoose = require('mongoose');

const notifySchema = mongoose.Schema({
    notify : { type: Object, required: true, unique: false },
    date: { type: Date, default: Date.now }
});

const NotifySchema = mongoose.model('Notify', notifySchema);
module.exports = NotifySchema;