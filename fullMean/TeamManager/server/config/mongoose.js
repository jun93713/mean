var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');
var path = require('path');


var promise = mongoose.connect('mongodb://localhost/player', {
    useMongoClient: true
});


promise.then(
    ()=>{console.log('connected to database')}
);

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});