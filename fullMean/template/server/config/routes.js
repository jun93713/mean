var sample = require('../controllers/sampleController.js');

module.exports = function (app) {


    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}