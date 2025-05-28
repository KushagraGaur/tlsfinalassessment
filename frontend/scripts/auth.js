document.addEventListener('DOMContentLoaded', function() {
    const signinTab = document.getElementById('signin-tab');
    const signupTab = document.getElementById('signup-tab');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const signupPassword = document.getElementById('signup-password');
    const strengthIndicator = document.getElementById('strength-indicator');
    const hintBtn = document.getElementById('hint-btn');
    const exerciseHint = document.getElementById('exercise-hint');

    // Switch between sign in and sign up forms
    signinTab.addEventListener('click', function() {
        signinTab.classList.add('active');
        signupTab.classList.remove('active');
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    signupTab.addEventListener('click', function() {
        signupTab.classList.add('active');
        signinTab.classList.remove('active');
        signupForm.classList.remove('hidden');
        signinForm.classList.add('hidden');
    });

    // Password strength indicator
    signupPassword.addEventListener('input', function() {
        const password = signupPassword.value;
        let strength = 0;
        
        // Check length
        if (password.length >= 8) strength += 1;
        
        // Check for numbers
        if (/\d/.test(password)) strength += 1;
        
        // Check for special characters
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
        
        // Check for uppercase letters
        if (/[A-Z]/.test(password)) strength += 1;
        
        // Update strength indicator
        switch(strength) {
            case 0:
            case 1:
                strengthIndicator.textContent = 'Weak';
                strengthIndicator.style.color = '#ff4d4f';
                break;
            case 2:
                strengthIndicator.textContent = 'Medium';
                strengthIndicator.style.color = '#faad14';
                break;
            case 3:
            case 4:
                strengthIndicator.textContent = 'Strong';
                strengthIndicator.style.color = '#52c41a';
                break;
        }
    });

    // Login functionality
    loginBtn.addEventListener('click', function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate API call
        simulateLogin(email, password)
            .then(user => {
                // Store user data in localStorage
                localStorage.setItem('currentUser', JSON.stringify(user));
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            })
            .catch(error => {
                alert(error.message);
            });
    });

    // Signup functionality
    signupBtn.addEventListener('click', function() {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        // Simulate API call
        simulateSignup(email, password)
            .then(user => {
                // Store user data in localStorage
                localStorage.setItem('currentUser', JSON.stringify(user));
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            })
            .catch(error => {
                alert(error.message);
            });
    });

    // Simulate login API call
    function simulateLogin(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // In a real app, this would be an actual API call
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(u => u.email === email && u.password === password);
                
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1000);
        });
    }

    // Simulate signup API call
    function simulateSignup(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // In a real app, this would be an actual API call
                const users = JSON.parse(localStorage.getItem('users')) || [];
                
                // Check if user already exists
                if (users.some(u => u.email === email)) {
                    reject(new Error('User with this email already exists'));
                    return;
                }
                
                // Create new user
                const newUser = {
                    id: Date.now().toString(),
                    email,
                    password,
                    name: email.split('@')[0],
                    joinedDate: new Date().toISOString()
                };
                
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                
                resolve(newUser);
            }, 1000);
        });
    }
});