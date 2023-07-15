const getModel = require('../models/course');

class SiteController {
    homepage(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
