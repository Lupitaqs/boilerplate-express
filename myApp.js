let express = require('express');
let nodemon = require('nodemon');

let app = express();

console.log("Hello World")

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// });

// Send a file to the browser
app.get("/", function(req, res) {   
    res.sendFile(__dirname + "/views/index.html");
});






























 module.exports = app;
