const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

router.get('/:userId', progressController.getUserProgress); 
router.post('/:userId', progressController.updateProgress);

module.exports = router;