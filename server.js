var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friends, How many of us have them? - Whodini
var friends = [
    {
        name: 'Dallas',
        photo: 'https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },

];


// Move routes to the appropriate files after testing
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
});

// Display friends
app.get('/api/friends', function (req, res) {
    return res.json(friends);
});

// Start server to begin listening
app.listen(PORT, function () {
    console.log('App listening on http://localhost:' + PORT);
});