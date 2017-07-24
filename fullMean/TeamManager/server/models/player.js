// require mongoose
var mongoose = require('mongoose');
// create the schema
var PlayerSchema = new mongoose.Schema(
    {
        name: { type: String },
        position: { type: String },
        gameone: { type: String, default: 'Undecided'},
        gametwo: { type: String, default: 'Undecided'},
        gamethree: { type: String, default: 'Undecided'},
    },
    { timestamps: true } );

// register the schema as a model
var Player = mongoose.model('Player', PlayerSchema);
