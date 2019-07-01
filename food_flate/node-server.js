const express = require("express");
const xml2js = require("xml2js");         // xml 파일 json으로 변환
const port = 3355;
const Client = require("mongodb").MongoClient;    // 몽고디비와 연결하는 클래스(MongoClient mc = new MongoClient())

const app = express();

app.use("/", express.static('./public'));
app.get("/", function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// CROSS 도메인 => 서버와 클라이언트의 port가 다른 경우에 사용
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// 메인 화면
app.get('/home', function (req, res) {
    var url = "mongodb://localhost:27017";

    Client.connect(url, (err,client) => {
        var db = client.db("mydb");

        db.collection('home').find({}).toArray(function (err, docs) {
            res.json(docs);
            client.close();
        })
    })
})

// main 상세보기
app.get('/homeDetail', function (req, res) {
    var url = "mongodb://localhost:27017";
    var hno = req.query.hno;

    Client.connect(url, (err,client) => {
        var db = client.db("mydb");

        db.collection('homeDetail').find({hno:Number(hno)}).toArray(function (err, docs) {
            res.json(docs);
            client.close();
        })
    })
})

// 식당 상세보기
app.get('/foodShop', function (req, res) {
    var url = "mongodb://localhost:27017";
    var shop_name = req.query.shop_name;
    shop_name = shop_name.substr(3, shop_name.length).trim();

    Client.connect(url, (err,client) => {
        var db = client.db("mydb");

        db.collection('foodShop').find({title:shop_name}).toArray(function (err, docs) {
            res.json(docs);
            client.close();
        })
    })
})

app.listen(port, function () {
    console.log("서버 가동 완료:","http://localhost:3355");
});

