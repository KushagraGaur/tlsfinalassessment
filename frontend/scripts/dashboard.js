document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    // Update user info in the dashboard
    updateUserInfo(currentUser);

    // Load exercises data
    loadExercisesData();

    // Set up event listeners
    setupEventListeners();
});

function updateUserInfo(user) {
    // Update profile sidebar
    const profileName = document.querySelector('.profile-header h2');
    if (profileName) profileName.textContent = user.name || 'User';

    // Update email in the profile if needed
    const profileEmail = document.querySelector('.profile-header p');
    if (profileEmail) profileEmail.textContent = user.email || 'Web Developer';
}

function loadExercisesData() {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data
    const exercises = [
        { id: 1, title: "The Web Awakens – Creating Your First HTML Page", status: "completed", submissions: 1 },
        { id: 2, title: "Speak Loud and Clear – Meet the Headings!", status: "attempted", submissions: 1 },
        { id: 3, title: "The Grocery Scroll – Unleashing Lists", status: "completed", submissions: 9 },
        { id: 4, title: "Picture Perfect – Adding an Image", status: "not-attempted", submissions: 0 },
        { id: 5, title: "The Great Divide – Sections, Classes & Divs", status: "attempted", submissions: 2 },
        { id: 6, title: "What is CSS?", status: "completed", submissions: 3 },
        { id: 7, title: "Styling Lists Like a Pro", status: "completed", submissions: 2 },
        { id: 8, title: "Perfect Your Navbar", status: "not-attempted", submissions: 0 },
        { id: 9, title: "Beautiful Sections with Classes and Divs", status: "completed", submissions: 1 },
        { id: 10, title: "Footer Fun", status: "attempted", submissions: 1 }
    ];

    // Update exercise status in the UI
    updateExerciseStatus(exercises);
}

function updateExerciseStatus(exercises) {
    const statusContainer = document.querySelector('.status-container');
    if (!statusContainer) return;

    // Clear existing content
    statusContainer.innerHTML = '';

    // Add each exercise to the status container
    exercises.forEach(exercise => {
        const statusItem = document.createElement('div');
        statusItem.className = `status-item ${exercise.status.replace(' ', '-')}`;
        
        let icon = '';
        if (exercise.status === 'completed') icon = '✅';
        else if (exercise.status === 'attempted') icon = '💬';
        else icon = 'W';
        
        statusItem.innerHTML = `
            <span class="status-icon">${icon}</span>
            <span class="status-text">${exercise.title}</span>
        `;
        
        // Add click event to navigate to exercise
        statusItem.addEventListener('click', () => {
            localStorage.setItem('currentExercise', exercise.id);
            window.location.href = 'compiler.html';
        });
        
        statusContainer.appendChild(statusItem);
    });
}

function setupEventListeners() {
    // Navigation menu active state
    const navItems = document.querySelectorAll('.nav-menu li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Logout functionality could be added here
}