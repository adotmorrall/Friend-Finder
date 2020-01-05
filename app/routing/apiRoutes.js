var friends = require('../data/friends');

module.exports = function (app) {

    // GET route to display a JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    });

    // Add new friend
    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);

        // Convert user scares into an array
        newFriend.scores = parseInt(newFriend.scores);
        for (var i = 0; i < newFriend.scores; i++) {
            console.log(newFriend.scores[i]);
        }


        // Add friend scores
        // friends.push(newFriend);
        // res.json(newFriend);
    });
}