var express  =  require( "express");
var path  =  require( "path");
var app  =  express();



app.use(express.static(path. join(__dirname  +  "./static")));
app.set( 'views', path. join(__dirname,  './views'));
app.set( 'view engine',  'ejs');

// root route to render the index.ejs view
// tell the express app to listen on port 8000
var server = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

var io  =  require( 'socket.io'). listen(server);

var counter = 0;
app.get( '/', function(req, res) {

    res. render( "index");
});

io.sockets.on( 'connection', function (socket) {
    console.log( "WE ARE USING SOCKETS!");
    console.log(socket.id);
    //all the socket code goes in here!
    socket.on( "button_clicked", function (){
        counter ++;
        io.sockets.emit( 'server_response', {count: counter});
    });
    socket.on( "reset", function (){
        counter = 0;
        io.sockets.emit( 'server_response', {count: counter});
    });
});





