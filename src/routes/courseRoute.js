const express = require('express');
const router = express.Router();
const getCourseController = require('../app/controllers/CourseController');

router.get('/create', getCourseController.create);
router.post('/store', getCourseController.store);
router.get('/:slug', getCourseController.courseDetail);
router.get('/', getCourseController.course);

module.exports = router;
