// require mongoose
var mongoose = require('mongoose');
// create the schema
var PigSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    color: {type: String}
}, {timestamps: true});

// register the schema as a model
var Pig = mongoose.model('Pig', PigSchema);
mongoose.Promise = global.Promise;