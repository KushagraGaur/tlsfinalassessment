const fs = require('fs');
const path = require('path');

const exercisesPath = path.join(__dirname, '../data/exercises.json');

// Read exercises data
const readExercises = () => {
    try {
        const data = fs.readFileSync(exercisesPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

exports.getAllExercises = (req, res) => {
    try {
        const exercises = readExercises();
        res.status(200).json(exercises);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch exercises' });
    }
};

exports.getExerciseById = (req, res) => {
    try {
        const exercises = readExercises();
        const exercise = exercises.find(ex => ex.id === parseInt(req.params.id));
        
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        
        res.status(200).json(exercise);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch exercise' });
    }
};