const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersPath = path.join(__dirname, '../data/users.json');

// Helper function to read users
const readUsers = () => {
    try {
        const data = fs.readFileSync(usersPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Helper function to write users
const writeUsers = (users) => {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
};

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            email,
            password: hashedPassword,
            name: email.split('@')[0],
            joinedDate: new Date().toISOString()
        };

        // Save user
        users.push(newUser);
        writeUsers(users);

        // Generate token
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            'your-secret-key',
            { expiresIn: '1h' }
        );

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name
            },
            token
        });
    } catch (err) {
        res.status(500).json({ message: 'Signup failed, please try again' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    try {
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            'your-secret-key',
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            },
            token
        });
    } catch (err) {
        res.status(500).json({ message: 'Login failed, please try again' });
    }
};