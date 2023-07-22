const getModel = require('../models/course');
class MeController {
    // me/stored/courses
    storedCourses(req, res, next) {
        getModel
        .find({})
        .lean()
        .then((courses) => {
            res.render('./me/stored-courses', { courses });
        })
        .catch((error) => {
            next(error);
        });
    }
}

module.exports = new MeController();
