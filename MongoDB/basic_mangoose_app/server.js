var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// var mongoose = require('mongoose');
// // This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// //   our db in mongodb -- this should match the name of the db you are going to use for your project.
// mongoose.connect('mongodb://localhost/quoting_dojo');
//
// var QuoteSchema = new mongoose.Schema({
//     name: {type: String},
//     quote: {type: String}
// }, {timestamps: true});
// // Store the Schema under the name 'Quote'
// mongoose.model('Quote', QuoteSchema);
// // Retrieve the Schema called 'Quote' and store it to the variable Quote
// var Quote = mongoose.model('Quote');


// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
});
// Add Quote Request
app.post('/addquote', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the Quote from req.body to the database.
    res.redirect('/quotes');
});
app.get('/quotes', function(req, res) {
    // This is where we will retrieve the Quotes from the database and include them in the view page we will be rendering.
    res.render('quotes');
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});


