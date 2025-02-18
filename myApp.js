let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

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
