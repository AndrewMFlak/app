var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3001;


require('dotenv').config({path:__dirname+'/.env'});
console.log(process.env.TEST);

// Configure body parser for AJAX request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//  Set up promise with mongoose
mongoose.Promise = global.Promise;

//  Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log();
});
