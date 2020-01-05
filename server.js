var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Code from earlier testing

/*
// GitHub Repo
app.get('/github', function (req, res) {
    res.sendFile(path.join(__dirname, 'https://github.com/adotmorrall/Friend-Finder.git'));
});

// Display friends
app.get('/api/friends', function (req, res) {
    return res.json(friends);
});

// Add new friend
app.post('/api/friends', function (req, res) {
    var newFriend = req.body;

    newFriend.name = newFriend.name.replace(/\s+/g, "");
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

// Start server to begin listening
app.listen(PORT, function () {
    console.log('App listening on http://localhost:' + PORT);
});
*/