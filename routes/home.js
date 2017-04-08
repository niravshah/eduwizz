module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/contact', function (req, res) {
        res.render('contact');
    });

    app.get('/courses', function (req, res) {
        res.render('courses');
    });

    app.get('/publications', function (req, res) {
        res.render('publications');
    });

};