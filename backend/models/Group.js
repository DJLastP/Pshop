const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    groupInfo : { type: Object, required: true, unique: false },
    date: { type: Date, default: Date.now }
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;