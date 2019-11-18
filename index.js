const express = require('express');
const app = express();



// Application settings
app.use(express.static('public')); // Automatically directs app to `public` folder to access static files
app.set('view engine', 'pug');    // View rendering engine


// Add different routes here
// Home page
app.get('/', (req, res) => {
    let articles = [
        {
            id: 1,
            title: 'John Doe',
            author: 'john@gmail.com',
            body: 'active'
        },
        {
            id: 2,
            title: 'Bob Williams',
            author: 'bob@gmail.com',
            body: 'inactive'
        },
        {
            id: 3,
            title: 'Shannon Jackson',
            author: 'shannon@gmail.com',
            body: 'active'
        }
    ];

    res.render('index', {
        title: 'My Title', 
        message:'My Other Random Message',
        articles: articles
    });
})

app.get('/api/members', (req, res) => res.json(members));

// Other page


// Server setup
const PORT = process.nextTick.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Access app at localhost:3000 after running "node index.js" in the terminal

