let express = require('express');
let app = express();

console.log("Hello World");

const myJSON = {"message": "Hello json"};

app.get("/", function(req,res){
 let absolutePath = __dirname + "/views/index.html";
 res.sendFile(absolutePath);
});

let cssPath = __dirname + "/public";

app.use("/public", express.static(cssPath));

app.get("/json", function(req,res){
 res.jsonp(myJSON);
})































 module.exports = app;
