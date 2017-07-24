var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    createPlayer: function (req, res) {
        var player = new Player(req.body);
        player.save(function (err) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                console.log('saved to database')
            }
        })
    },
    displayAll: function (req, res) {
        Player.find({}).exec(function (err, data) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.json(data)
            }
        })
    },
    removePlayer: function (req, res) {
        Player.remove({_id:req.body.id}).exec(function (err) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.json({something: 'something'})
            }
        })
    },

    updateStatus: function (req, res) {
        Player.findOne({_id: req.body.id}, function (err, player) {
            switch (req.body.game){
                case 1:
                    player.gameone = req.body.newstatus;
                    break;
                case 2:
                    player.gametwo = req.body.newstatus;
                    break;
                case 3:
                    player.gamethree = req.body.newstatus;
                    break;
                default:
                    console.log('something wrong about update function in controller');
                    break;
            }
            player.save(function (err) {
                if (err){
                    console.log("error!!!!!", err)
                }
                else {
                    res.json(player)
                }
            })
        })
    }
}