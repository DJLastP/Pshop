//라이브러리 import
const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT
//body-parser
const bodyParser = require('body-parser');

const priceRoutes = require('./routes/priceRoutes.js');
const memberRoutes = require('./routes/MemberRoutes.js');
const itemRoutes = require('./routes/ItemRoutes.js');
app.use(bodyParser.urlencoded({ extended: true }));
//JSON 사용
app.use(express.json());
//CORS보안해제
app.use(cors());
//라우터설정
app.use("/admin", priceRoutes);
app.use("/admin/item", itemRoutes);
app.use("/member", memberRoutes);
//서버오픈
app.listen(port, () => {
    console.log('listening on ' + port);
});

//app.set('view engine', 'ejs');

// //MondgoDb연결
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb+srv://admin:admin1234@cluster0.pktyshn.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
//     if (err) return console.log(err);
//     db = client.db('todoapp');
//     // db.collection('post').insertOne( {name : 'John', age : 20}, (err, res) => {
//     //     console.log('저장완료');
//     // });
//     app.listen('8081', () => {
//         console.log('listening on 8081');
//     });
// });



// app.post('/add', (req, res) => {
//     //select 요청
//     db.collection('counter').findOne({ name: 'PostCount' }, (err, result) => {
//         let total_post = result.totalPost;
//         let data = { _id: total_post + 1, title: req.body.title, date: req.body.date };
//         console.log(data);
//         //db에 insert
//         db.collection('post').insertOne(data, (err, res) => {
//             console.log(err);
//         });
//         //update (수정할데이터, 수정할 값,)
//         // $set 바꿀때 , $inc 기존값에 더할때
//         db.collection('counter').updateOne({ name: 'PostCount' }, { $inc: { totalPost: 1 } }, (err, result) => {
//             if (err) { return console.log(err) }
//         });
//     });
//     res.send('전송완료');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// app.get('/write', (req, res) => {

//     res.sendFile(__dirname + '/write.html');
// });

// app.get('/list', (req, res) => {
//     db.collection('post').find().toArray((err, result) => {
//         console.log(result);
//         res.json(result);
//     });
// });

// app.delete('/delete', (req, res) => {
//     let a = parseInt(req.body);
//     console.log(a);
//     db.collection('post').deleteOne({ _id: a }, (err, result) => {
//         console.log(err);

//     });
// });
