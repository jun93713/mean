// require express and path
var express  =  require( "express");
var path  =  require( "path");

// create the express app
var app  =  express();

var server = app. listen(8000, function() {
    console. log( "listening on port 8000");
});
var io  =  require( 'socket.io'). listen(server);

// static content
app.use(express.static(path. join(__dirname  +  "./static")));

// setting up ejs and our views folder
app.set( 'views', path. join(__dirname,  './views'));
app.set( 'view engine',  'ejs');

// root route to render the index.ejs view
app.get( '/', function(req, res) {
    res. render( "index");
});

// tell the express app to listen on port 8000

io.sockets.on( 'connection', function (socket) {
    //all the socket code goes in here!
    socket.on( "posting_form", function (data){
        let luckynum = Math.ceil(Math.random() * 1000);
        let msg = `You emitted the following information to the server: {name: '${data.name}', location: '${data.loca}', language: '${data.lang}', comment: '${data.comment}'} <br> Your lucky number emmited by the server is ${luckynum}`;
        socket.emit( 'updated_message', {info: msg});
    });
});
