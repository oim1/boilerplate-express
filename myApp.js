let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser')

console.log("Hello World");

app.use(function middleware(req, res, next){
 console.log(`${req.method} ${req.path} - ${req.ip}`);
 next();
})

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/now', function(req, res, next) {
 req.time = new Date().toString();
 next();
}, function(req, res) {
 let timeJSON = {"time": `${req.time}`}
 res.json(timeJSON);
})

app.get("/", function(req,res){
 let absolutePath = __dirname + "/views/index.html";
 res.sendFile(absolutePath);
});

app.get('/:word/echo', function(req, res) {
 let wordJSON = {"echo": `${req.params.word}`};
 res.jsonp(wordJSON);
});

app.get('/name', function(req, res) {
 let { first: firstName, last: lastName } = req.query;

 let nameJSON = {"name": `${firstName} ${lastName}`};

 res.jsonp(nameJSON);
});


let cssPath = __dirname + "/public";

app.use("/public", express.static(cssPath));

app.get("/json", function(req,res){
 let myJSON = {}
 if (process.env.MESSAGE_STYLE === "uppercase") {
  myJSON = {"message": "Hello json".toUpperCase()};
 } else {
  myJSON = {"message": "Hello json"};
 }
 res.jsonp(myJSON);
})






























 module.exports = app;
