// Express Framework
const express = require("express");
const app = express();

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
app.use(express.static(__dirname + "./../memory-lane-react/build"));

//SERVER LISTENING
app.listen(1337, () => {
    console.log("Server restarted...")
});