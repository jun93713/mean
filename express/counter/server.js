var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if (req.session.counter){
        req.session.counter += 1;
    }
    else{
        req.session.counter = 1;
    }
    res.render("index", {count:req.session.counter});
})

app.post('/plustwo', function(req, res) {
    req.session.counter += 1;
    res.redirect('/');
})

app.post('/reset', function(req, res) {
    req.session.counter = 0;
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});