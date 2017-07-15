/**
 * Created by jun on 7/13/17.
 */
var users = require('../controllers/users');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index')
    });
    app.get('/users', users.showall);
    app.post('/register', users.create);
    app.post('/login', users.login)
}