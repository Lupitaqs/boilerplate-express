let express = require('express');
let nodemon = require('nodemon');
require('dotenv').config(); // Load environment variables

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
    // Use the environment variable
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({
        "message": message
    });
});


























 module.exports = app;
