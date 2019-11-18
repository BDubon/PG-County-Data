var express = require('express');
var app = express();


// Application settings
app.use(express.static('public')); // Automatically directs app to `public` folder to access static files
app.set('view engine', 'jade');    // View rendering engine


// Add different routes here
app.get('/', function(req, res){
    res.render('index', {title: 'My Title', message:'Random Message'});
})


// Server setup
var server = app.listen(3000, function() {
    // var host = server.address().address;
    var port = server.address().port;

    console.log('Your app is running at http://localhost:%s', port) 
    // Access app at localhost:3000 after running "node index.js" in the terminal
});

