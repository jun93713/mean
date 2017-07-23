// require mongoose
var mongoose = require('mongoose');
// create the schema
var AnonymousNoteSchema = new mongoose.Schema(
    { note: { type: String } },
    { timestamps: true } );

// register the schema as a model
var AnonymousNote = mongoose.model('AnonymousNote', AnonymousNoteSchema);
mongoose.Promise = global.Promise;