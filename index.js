const express = require('express');
const app = express();


const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Bob Williams',
      email: 'bob@gmail.com',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Shannon Jackson',
      email: 'shannon@gmail.com',
      status: 'active'
    }
  ];


// Application settings
app.use(express.static('public')); // Automatically directs app to `public` folder to access static files
app.set('view engine', 'pug');    // View rendering engine


// Add different routes here
// Home page
app.get('/', (req, res) => {
    res.render('index', {title: 'My Title', message:'My Other Random Message'});
})

app.get('/api/members', (req, res) => res.json(members));

// Other page


// Server setup
const PORT = process.nextTick.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Access app at localhost:3000 after running "node index.js" in the terminal

