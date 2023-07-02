var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.pktyshn.mongodb.net/Pshop?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open', () => {
    console.log('MongoDb 연결 성공!!');
});