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
mongoose.connect('mongodb://localhost/message_board');

// define Schema variable
var Schema = mongoose.Schema;
// define Message Schema
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4 },
    text: {type: String, required: true, minlength: 1 },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true, minlength: 4 },
    text: {type: String, required: true, minlength: 1 }
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
// route for getting a particular message and comments

mongoose.Promise = global.Promise;

// Routes
// Root Request
app.get('/', function(req, res) {
    Message.find().sort('-createdAt').populate('comments').exec(function (err, messages) {
        if(err){console.log('Error');}
        else {
            res.render('index', {messages: messages});
        }

    });
});


// Add Message Request
app.post('/addmessage', function(req, res) {
    // This is where we would add the Message from req.body to the database.
    var msg = new Message({
        name: req.body.name,
        text: req.body.text
    });
    msg.save(function (err) {
        console.log(err)
    });
    res.redirect('/');
});
//add comment to message
app.post('/addcomment', function (req, res) {
    Message.findOne({_id: req.body.msgid}, function(err, message){
        var comment = new Comment({
            name: req.body.name,
            text: req.body.text,
        });
        comment._message = message._id;
        message.comments.push(comment);
        comment.save(function(err){
            if (err){ console.log(err, '1'); }
            else {
                message.save(function (err) {
                    if (err) {
                        console.log('Error', '2');
                    }
                    else {
                        res.redirect('/');
                    }
                });
            }
        });
    });
});



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});


