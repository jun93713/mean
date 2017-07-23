// require mongoose
var mongoose = require('mongoose');
// create the schema
var SampleSchema = new mongoose.Schema(
    { something: { type: String } },
    { timestamps: true } );

// register the schema as a model
var SampleNote = mongoose.model('Sample', SampleSchema);
