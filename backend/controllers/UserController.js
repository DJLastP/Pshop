const User = require('../models/Users');
const bodyParser = require('body-parser');
var db = require('../db.js');

exports.goMain = (req, res) => {
    res.json(1234444);
}

exports.createuser = (req, res) => {

    // var user = new User;
    // user._id = 1;
    // user.title = 'title';
    // user.date = '7-11';
    let a = { _id: 1 };
    //User.create(user);
    //let usr = User.find().body;
    User.find(a).then(result => {
        console.log(result);
        res.json(result);
    });

}

