
const express = require('express');
const request = require('request');
const app = express();



// *** APP SETTINGS ***
app.use(express.static('public'));   // Automatically directs app to `public` folder to access static files
app.set('view engine', 'pug');       // View rendering engine
app.set('views', './public/views')   // Set default views folder


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

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


