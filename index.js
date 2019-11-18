const express = require('express');
const app = express();
const request = require('request')


// *** APP SETTINGS ***
app.use(express.static('public')); // Automatically directs app to `public` folder to access static files
app.set('view engine', 'pug');    // View rendering engine


// *** ADD THE ROUTES HERE ***
// Home page
app.get('/', (req, res) => {
    const URL = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json'; 

    // Make APi call 
    request.get(URL, (err, response, body) => {
        if (err) {
            return next(err);
        };

        // Pass data to the view
        res.render('index', {
            title: 'My Title', 
            message:'My Other Random Message',
            data : JSON.parse(body)
        });
    });    
});

// Other page


// *** SERVER SETUP ***
const PORT = process.nextTick.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


