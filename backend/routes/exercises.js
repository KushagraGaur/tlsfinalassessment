const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// Get all exercises
router.get('/', exerciseController.getAllExercises);

// Get single exercise
router.get('/:id', exerciseController.getExerciseById);

module.exports = router;