var friends = require('../data/friends');

module.exports = function (app) {

    // GET route to display a JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    });

    // Add new friend
    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;

        newFriend.name = newFriend.name.replace(/\s+/g, "");
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
}