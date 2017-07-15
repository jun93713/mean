var peoples = require('../controllers/peoples.js');

module.exports = function (app) {
    //root rout, show all people, (find())
    app.get('/', peoples.findall);
    //'new/:name' add a name to db
    app.get('/new/:name', peoples.add);
    //'remove/:name' remove a name
    app.get('/remove/:name', peoples.remove);
    //'/:name' one person
    app.get('/:name', peoples.findone)
}