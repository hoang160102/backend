const express = require('express');
const router = express.Router();
const getCourseController = require('../app/controllers/CourseController');

router.get('/:slug', getCourseController.courseDetail);
router.get('/', getCourseController.course);

module.exports = router;
