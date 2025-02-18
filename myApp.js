let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

app.use(function middleware(req, res, next){
 console.log(`${req.method} ${req.path} - ${req.ip}`);
 next();
})

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
