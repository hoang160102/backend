const getModel = require('../models/course');
class CourseController {
    course(req, res, next) {
        getModel
            .find({})
            .lean()
            .then((courses) => {
                res.render('course', { courses });
            })
            .catch((error) => {
                next(error);
            });
    }

    courseDetail(req, res, next) {
        getModel
            .findOne({ slug: req.params.slug })
            .lean()
            .then((course) => {
                res.render('course-navigation/coursedetail', { course });
            })
            .catch(next);
    }

    //create /course/create
    create(req, res, next) {
        res.render('course-navigation/create');
    }

    // create /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const newCourse = new getModel(formData);
        newCourse
            .save()
            .then(() => {
                res.redirect('/course');
            })
            .catch(next);
    }

    //course/id/edit

    edit(req, res, next) {
        getModel.findById(req.params.id).lean()
            .then(course => {
                res.render('course-navigation/edit', { course })
            })
            .catch(next)
    }

    //[PUT]
    update(req, res, next) {
        getModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
}

module.exports = new CourseController();
