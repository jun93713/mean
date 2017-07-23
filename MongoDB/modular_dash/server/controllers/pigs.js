var mongoose = require('mongoose');
var Pig = mongoose.model('Pig');

module.exports = {
    // 'get's
    findall: function(req, res) {
        Pig.find({}).exec(function (err, pigs) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.render('index', {pigs: pigs});
            }
        });
    },

    findone: function (req, res, template) {
        Pig.findOne({_id: req.params.id}, function(err, pig) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.render(template, {pig: pig})
            }
        });
    },

    // 'post's
    create: function (req, res) {
        var pig = new Pig(req.body);
        pig.save(function (err) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.redirect('/');
            }
        });
    },
    edit: function (req, res) {
        Pig.findOne({_id: req.params.id}, function (err, pig) {
            pig.name = req.body.name;
            pig.age = req.body.age;
            pig.color = req.body.color;
            pig.save(function (err) {
                if (err){
                    console.log("error!!!!!", err)
                }
                else {
                    res.redirect('/');
                }
            })
        })
    },
    delete: function (req, res) {
        Pig.remove({_id: req.params.id}, function(err){
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.redirect('/');
            }
        })
    }
}