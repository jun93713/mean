var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/pigs_dashboard');


var PigSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    color: {type: String}
}, {timestamps: true});
// Store the Schema under the name 'pig'
mongoose.model('Pig', PigSchema);
// Retrieve the Schema called 'Quote' and store it to the variable Quote
var Pig = mongoose.model('Pig');
mongoose.Promise = global.Promise;





// Routes
// Root Request
app.get('/', function(req, res) {
    Pig.find({}).exec(function (err, pigs) {
        if (err){
            console.log("error!!!!!", err)
        }
        else {
            res.render('index', {pigs: pigs});
        }
    });
});





app.get('/pigs/new', function(req, res) {
    res.render('new');
});
app.get('/pigs/:id', function(req, res) {
    Pig.findOne({_id: req.params.id}, function(err, pig) {
        res.render('pig', {pig: pig});
    });

});
app.get('/pigs/edit/:id', function(req, res) {
    console.log(req.params.id);
    Pig.find({_id: req.params.id}).exec(function (err, pig) {
        res.render('edit', {pig: pig});
    })
});


// Add new pig
app.post('/pigs', function(req, res) {
    // This is where we would add the Pig from req.body to the database.
    var pig = new Pig();
    pig.name = req.body.name;
    pig.age = req.body.age;
    pig.color = req.body.color;
    pig.save(function (err) {
        console.log(err);
    });

    res.redirect('/');
});
//edit
app.post('/pigs/:id', function(req, res) {
    Pig.findOne({_id: req.params.id}, function (err, pig) {
        pig.name = req.body.name;
        pig.age = req.body.age;
        pig.color = req.body.color;
        pig.save(function (err) {
            console.log(err)
        })
    });
    res.redirect('/');
});
//remove
app.post('/pigs/destroy/:id', function(req, res) {
    Pig.remove({_id: req.params.id}, function(err){
        console.log(err)
    });
    res.redirect('/');
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});


