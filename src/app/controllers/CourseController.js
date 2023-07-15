const getModel = require('../models/course');
class CourseController {
    course(req, res, next) {
        getModel
            .find({}).lean()
            .then((courses) => {
                res.render('course', { courses });
            })
            .catch((error) => {
                next(error);
            });
    }

    courseDetail(req, res) {
        res.send('course');
    }
}

module.exports = new CourseController();
