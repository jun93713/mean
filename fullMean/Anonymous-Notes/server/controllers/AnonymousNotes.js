var mongoose = require('mongoose');
var AnonymousNote = mongoose.model('AnonymousNote');

module.exports = {
    create: function (req, res) {
        var note = new AnonymousNote(req.body);
        note.save(function (err) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.json({note: note})
            }
        })
    },

    display: function (req, res) {
      AnonymousNote.find({}).exec(function (err, data) {
          if (err){
              console.log("error!!!!!", err)
          }
          else {
              console.log(data);
              res.json(data)
          }
      });
    }
}