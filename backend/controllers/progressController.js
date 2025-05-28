const fs = require('fs');
const path = require('path');

const progressPath = path.join(__dirname, '../db/progress.json');

// Read progress data
const readProgress = () => {
    try {
        const data = fs.readFileSync(progressPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
};

// Write progress data
const writeProgress = (progress) => {
    fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));
};

exports.getUserProgress = (req, res) => {
    try {
        const progress = readProgress();
        const userProgress = progress[req.params.userId] || {};
        res.status(200).json(userProgress);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch progress' });
    }
};

exports.updateProgress = (req, res) => {
    try {
        const { exerciseId, completed } = req.body;
        const progress = readProgress();
        
        if (!progress[req.params.userId]) {
            progress[req.params.userId] = {};
        }
        
        progress[req.params.userId][exerciseId] = {
            completed,
            timestamp: new Date().toISOString()
        };
        
        writeProgress(progress);
        res.status(200).json({ message: 'Progress updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update progress' });
    }
};