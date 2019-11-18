var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');

// Add different routes here
app.get('/', function(req, res){
    res.render('index', {title: 'My Title', message:'Random Message'});
})


// Server setup
var server = app.listen(3000, function() {
    // var host = server.address().address;
    var port = server.address().port;

    console.log('Your app is running at http://localhost:%s', port)
});

