var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    _id: 'number',
    title: 'string',
    date: 'string'
});

var User = mongoose.model('User', userSchema);

User.create = (newuser, result) => {
    newuser.save().then();
};

User.find().then(user => {
    return user;
});


module.exports = User;