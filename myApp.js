let express = require('express');
let nodemon = require('nodemon');
require('dotenv').config(); // Load environment variables

let app = express();

console.log("Hello World")

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

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

// Chain middleware to create a time server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next(); 
}
, (req, res) => {
    res.json({
        "time": req.time
    });
});
























 module.exports = app;
