const express = require('express');
const router = express.Router();
const getCourseController = require('../app/controllers/CourseController');

router.get('/create', getCourseController.create);
router.post('/store', getCourseController.store);
router.get('/:id/edit', getCourseController.edit)
router.put('/:id', getCourseController.update)
router.get('/:slug', getCourseController.courseDetail);
router.get('/', getCourseController.course);

module.exports = router;
