document.addEventListener('DOMContentLoaded', function() {
    // All 10 exercises from your original content
    const exercises = [
        {
            id: 1,
            title: "The Web Awakens – Creating Your First HTML Page",
            completed: true,
            story: "Every adventure begins somewhere. This one begins with your first-ever HTML page. Let's put it together and start your journey on the web!",
            hint: "Try changing the content between the <h1> tags to customize your page.",
            html: `<!DOCTYPE html>
<html>
<head>
  <title>My Web Adventure</title>
</head>
<body>
  <h1>The Journey of HTML Begins</h1>
</body>
</html>`,
            css: '',
            js: ''
        },
        {
            id: 2,
            title: "Speak Loud and Clear – Meet the Headings!",
            completed: false,
            story: "Headings are like signboards on the road. They help you organize your ideas and guide your readers. Time to try out headings from big to small.",
            hint: "Try adding <h3> and <h4> between them.",
            html: `<body>
  <h1>Main Title</h1>
  <h2>Subheading Level 1</h2>
  <h6>The smallest whisper of a heading</h6>
</body>`,
            css: '',
            js: ''
        },
        {
            id: 3,
            title: "The Grocery Scroll – Unleashing Lists",
            completed: true,
            story: "It's time to organize your pantry and cooking steps using lists! You'll use both unordered and ordered lists to do this.",
            hint: "Use <li> tags to list grocery items and sandwich steps.",
            html: `<body>
  <h2>My Grocery List</h2>
  <ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li></li>
  </ul>
  <h2>Steps to Make a Sandwich</h2>
  <ol>
    <li>Take two slices of bread</li>
    <li>Spread butter or sauce</li>
    <li>Place your favorite filling</li>
    <li>Put slices together and enjoy!</li>
  </ol>
</body>`,
            css: '',
            js: ''
        },
        {
        "id": 4,
        "title": "Picture Perfect – Adding an Image",
        "story": "Images speak louder than text sometimes. Time to decorate your webpage with an image of your favorite thing!",
        "hint": "Use <img src=\"...\" alt=\"...\"> to embed your image.",
        "html": "<body>\n\n  <h2>This is My Favorite Animal</h2>  <!-- Heading for the image -->\n  \n  <img src=\"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300\" \n       alt=\"A fox in the wild\" width=\"300\"> \n  <!-- Image of a fox from Unsplash; replace the URL with your own image link or path -->\n\n  <!-- Tip for user: Replace the src with a local file path or another image URL from the web -->\n\n</body>",
        "css": "",
        "js": ""
    },
    {
        "id": 5,
        "title": "The Great Divide – Sections, Classes & Divs",
        "story": "Think of your webpage like rooms in a house. Sections and divs help organize each room",
        "hint": "Add another fun fact about yourself in the empty list item.",
        "html": "<body>\n  <section class=\"about-me\"> <!-- A semantic section for personal info -->\n    <h2>About Me</h2> <!-- Section title -->\n    <p>I am learning frontend development and loving it!</p> <!-- Description inside the section -->\n  </section>\n\n  <div class=\"fun-facts\"> <!-- A generic container for extra content -->\n    <h3>Fun Facts</h3> <!-- Heading for fun facts -->\n    <ul> <!-- List of fun facts -->\n      <li>I can solve a Rubik's Cube</li>\n      <li>I love coffee</li>\n      <!-- Add another fun fact about yourself -->\n      <li></li> <!-- ← User fills in their own fact -->\n    </ul>\n  </div>\n\n</body>",
        "css": "",
        "js": ""
    },
    {
        "id": 6,
        "title": "What is CSS?",
        "story": "Imagine your website is a plain cake — CSS is the frosting and decorations that make it irresistible! CSS (Cascading Style Sheets) controls how your HTML looks, from colors and fonts to layouts and animations. Let's start by adding some global styles to your webpage to make it visually appealing.",
        "hint": "Try changing the colors or fonts in the style tag to see how it affects the page.",
        "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>CSS Basics</title>\n\n  <style>\n    /* This styles the entire body of the webpage */\n    body {\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Sets a clean font for all text */\n      background-color: #f0f8ff; /* Adds a light blue background */\n      color: #333; /* Sets default text color to dark grey */\n      margin: 20px; /* Adds space around the content */\n    }\n\n    /* Style for all headings */\n    h1, h2 {\n      color: #1e90ff; /* Dodger blue color for headings */\n    }\n  </style>\n</head>\n<body>\n\n  <h1>Welcome to CSS!</h1>\n  <h2>Making websites beautiful, one style at a time</h2>\n\n  <p>Notice how the background and text colors change the whole mood of the page.</p>\n\n</body>\n</html>",
        "css": "",
        "js": ""
    },
    {
        "id": 7,
        "title": "Styling Lists Like a Pro",
        "story": "Lists organize your content like a neat shelf. But plain bullet points are boring! Let's spice them up with custom colors, spacing, and styles.",
        "hint": "Try different list-style-type values and adjust spacing to make lists easier to read.",
        "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled Lists</title>\n\n  <style>\n    /* Style all unordered lists */\n    ul {\n      list-style-type: square; /* Changes bullets from default circles to squares */\n      padding-left: 20px; /* Adds space on the left */\n      color: green; /* Changes bullet text color */\n      font-weight: bold; /* Makes list items bold */\n    }\n\n    /* Style all list items */\n    li {\n      margin-bottom: 10px; /* Adds space between list items */\n    }\n  </style>\n</head>\n<body>\n\n  <ul>\n    <li>Learn HTML basics</li>\n    <li>Master CSS styling</li>\n    <li>Build interactive pages</li>\n    <!-- Add your favorite item below -->\n  </ul>\n\n</body>\n</html>",
        "css": "",
        "js": ""
    },
    {
        "id": 8,
        "title": "Perfect Your Navbar",
        "story": "Your navbar is your website's compass. Let's style it so users can easily navigate while making it visually sleek.",
        "hint": "Use nav and style a tags with hover effects for interactive navigation.",
        "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Navbar Styling</title>\n\n  <style>\n    /* Style the navigation bar */\n    nav {\n      background-color: #333; /* Dark background */\n      overflow: hidden; /* Clear floats */\n      padding: 10px 0;\n    }\n\n    /* Style the links inside the navbar */\n    nav a {\n      color: white; /* White text color */\n      text-decoration: none; /* Remove underline */\n      padding: 14px 20px; /* Spacing around links */\n      float: left; /* Align links horizontally */\n      font-weight: bold;\n      font-family: Arial, sans-serif;\n    }\n\n    /* Change link color on hover */\n    nav a:hover {\n      background-color: #575757; /* Dark grey background on hover */\n    }\n  </style>\n</head>\n<body>\n\n  <nav>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Contact</a>\n  </nav>\n\n</body>\n</html>",
        "css": "",
        "js": ""
    },
    {
        "id": 9,
        "title": "Beautiful Sections with Classes and Divs",
        "story": "Websites are like stories broken into chapters. Sections and divisions (<section>, <div>) help organize content — now let's style them!",
        "hint": "Use section tags and style with backgrounds, padding, and shadows to separate content visually.",
        "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Styled Sections</title>\n\n  <style>\n    /* Style all sections */\n    section {\n      background-color: #e0f7fa; /* Light cyan background */\n      padding: 20px; /* Space inside section */\n      margin-bottom: 15px; /* Space below each section */\n      border-radius: 8px; /* Rounded corners */\n      box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow */\n    }\n\n    /* Style section headings */\n    section h2 {\n      color: #00796b; /* Teal color */\n      font-family: 'Verdana', sans-serif;\n    }\n  </style>\n</head>\n<body>\n\n  <section>\n    <h2>About Our Journey</h2>\n    <p>This section tells a story about learning web development.</p>\n  </section>\n\n  <section>\n    <h2>Next Steps</h2>\n    <p>What you will learn in the upcoming exercises.</p>\n  </section>\n\n</body>\n</html>",
        "css": "",
        "js": ""
    },
        {
            id: 10,
            title: "Footer Fun",
            completed: false,
            story: "The footer is like the sign-off in a letter. Let's make it look friendly and clear with simple styling.",
            hint: "Use fixed positioning to keep footer at the bottom and style text for clarity.",
            html: `<!DOCTYPE html>
<html>
<head>
  <title>Footer Styling</title>
  <style>
    footer {
      background-color: #1e90ff;
      color: white;
      text-align: center;
      padding: 15px 0;
      position: fixed;
      width: 100%;
      bottom: 0;
      font-family: 'Courier New', monospace;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <footer>
    &copy; 2025 TechLearn Internship Challenge
  </footer>
</body>
</html>`,
            css: '',
            js: ''
        }
    ];

    // Initialize CodeMirror editors
    const htmlEditor = CodeMirror(document.getElementById('html-editor'), {
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        indentUnit: 4,
        value: '<!-- Your HTML here -->'
    });

    const cssEditor = CodeMirror(document.getElementById('css-editor'), {
        mode: 'css',
        theme: 'dracula',
        lineNumbers: true,
        value: '/* Your CSS here */'
    });

    const jsEditor = CodeMirror(document.getElementById('js-editor'), {
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: true,
        value: '// Your JavaScript here'
    });

    // Render exercise list
    function renderExerciseList() {
        const completedCount = exercises.filter(ex => ex.completed).length;
        document.getElementById('progress-count').textContent = `Completed: ${completedCount}/${exercises.length}`;
        
        const exerciseList = document.getElementById('exercise-list');
        exerciseList.innerHTML = exercises.map(ex => `
            <div class="exercise-item ${ex.completed ? 'completed' : ''}" data-id="${ex.id}">
                <span class="status-icon">${ex.completed ? '✓' : '→'}</span>
                ${ex.title}
            </div>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.exercise-item').forEach(item => {
            item.addEventListener('click', () => loadExercise(parseInt(item.dataset.id)));
        });
    }

    // Load exercise into editor
    function loadExercise(id) {
        const exercise = exercises.find(ex => ex.id === id);
        if (!exercise) return;
        
        document.getElementById('exercise-title').textContent = exercise.title;
        document.getElementById('exercise-story').textContent = exercise.story;
        
        htmlEditor.setValue(exercise.html);
        cssEditor.setValue(exercise.css);
        jsEditor.setValue(exercise.js);
        
        updatePreview();
        
        // Switch views
        document.getElementById('exercise-menu').classList.add('hidden');
        document.getElementById('editor-view').classList.add('active');
    }

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('editor-view').classList.remove('active');
        document.getElementById('exercise-menu').classList.remove('hidden');
    });

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            
            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding editor
            document.querySelectorAll('.editor-container').forEach(editor => {
                editor.classList.remove('active');
            });
            document.getElementById(target).classList.add('active');
        });
    });

    // Auto-update preview
    function updatePreview() {
        const frame = document.getElementById('preview-frame');
        const doc = frame.contentDocument || frame.contentWindow.document;
        
        doc.open();
        doc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssEditor.getValue()}</style>
            </head>
            <body>${htmlEditor.getValue()}
                <script>${jsEditor.getValue()}</script>
            </body>
            </html>
        `);
        doc.close();
    }

    // Initialize editors
    htmlEditor.on('change', updatePreview);
    cssEditor.on('change', updatePreview);
    jsEditor.on('change', updatePreview);

    // Initial render
    renderExerciseList();
});