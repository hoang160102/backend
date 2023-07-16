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

    courseDetail(req, res, next) {
        getModel.findOne({ slug: req.params.slug}).lean()
            .then(course => {
                res.render('coursedetail', { course })
            })
            .catch(next)
    }
}

module.exports = new CourseController();
