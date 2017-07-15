var pigs = require('../controllers/pigs.js');

module.exports = function (app) {
    // Root Request






    app.get('/', pigs.findall);








    app.get('/pigs/new', function(req, res) {
        res.render('new');
    });
    app.get('/pigs/:id', function(req, res) {
        pigs.findone(req, res, 'pig')
    });
    app.get('/pigs/edit/:id', function(req, res) {
        pigs.findone(req, res, 'edit')
    });

// Add new pig
    app.post('/pigs', pigs.create);
//edit
    app.post('/pigs/:id', pigs.edit);
//delete
    app.post('/pigs/destroy/:id', pigs.delete);
}