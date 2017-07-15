var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
    //root rout, show all people, (find())
    findall: function (req, res) {
        People.find().exec(function (err, peoples) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.json(peoples);
            }
        });
    },
    //'new/:name' add a name to db
    add: function (req, res) {
        var person = new People({name: req.params.name});
        person.save(function (err) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.redirect('/');
            }
        });
    },
    //'remove/:name' remove a name
    remove: function (req, res) {
        People.remove({name: req.params.name}, function(err){
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.redirect('/');
            }
        })
    },
    //'/:name' one person
    findone: function (req, res) {
        People.findOne({name: req.params.name}, function(err, person){
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.json(person);
            }
        })
    },
}