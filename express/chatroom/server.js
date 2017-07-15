var express  =  require( "express");
var path  =  require( "path");
var app  =  express();

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
var server = app. listen(8000, function() {
    console. log( "listening on port 8000");
});

// socket.io

var io  =  require( 'socket.io'). listen(server);
var users = {}, chats = [];
io.sockets.on( 'connection', function (socket) {

    //add a new user in chatroom
    socket.on( "got_a_new_user", function (data){
        users[socket.id] = data.name;
        io.sockets.emit( 'new_user', {users: users});
        io.sockets.emit('allchats', {chats: chats})
    });

    //user disconnect from chatroom
    socket.on('disconnect', function () {
        delete users[socket.id];
        io.sockets.emit( 'new_user', {users: users});
    });

    //user send a new chat msg
    socket.on('newchat', function (data) {
        chats.push([users[socket.id], data.chat]);
        io.sockets.emit('allchats', {chats: chats})
    })

});
