var player = require('./../controllers/playerController.js');

module.exports = function (app) {
    app.post('/create', player.createPlayer);
    app.get('/display', player.displayAll);
    app.post('/remove', player.removePlayer);
    app.post('/update', player.updateStatus);

    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}