const getModel = require('../models/course')

class SiteController {
    homepage(req, res) {
        getModel.find({})
            .then(courses => {
                res.json(courses)
            })
            .catch(courses => {
                res.status(400).json({error: 'Error'})
            })

        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
