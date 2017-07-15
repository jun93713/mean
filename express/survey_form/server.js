var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})
var form;
app.post('/form', function(req, res) {
    form = req.body;
    res.redirect('/result');
})

app.get('/result', function(req, res) {
    console.log("form", form);
    res.render("result", {form: form});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});