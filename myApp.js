let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req,res){
 let absolutePath = __dirname + "/views/index.html";
 res.sendFile(absolutePath);
});

let cssPath = __dirname + "/public";

app.use("/public", express.static(cssPath));































 module.exports = app;
