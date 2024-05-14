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

// Middleware to serve static files
app.use("/public", express.static(__dirname + "/public"));

// Get a response from the server
app.get("/json", function(req, res) {
    res.json({
        "message": "Hello json"
    });
});


























 module.exports = app;
