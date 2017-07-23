var notes = require('../controllers/AnonymousNotes.js');

module.exports = function (app) {
    app.post('/create', notes.create);
    app.get('/display', notes.display);


    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}