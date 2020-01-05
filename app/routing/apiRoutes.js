var friends = require('../data/friends');

module.exports = function (app) {

    // GET route to display a JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    });

    // Add new friend
    app.post('/api/friends', function (req, res) {

        // Will hold the match for the best friend
        var bestFriend = {
            name: '',
            photo: '',
            friendDiff: 1000
        };

        // Making sure the new friend info is captured
        var newFriend = req.body;
        console.log(newFriend);

        // Using this variable to calculate diff b/w newFriend and friends in the database
        var matchIndex = 0;
        var minDiff = 50;

        // Looping through friends in my 'database'
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            var totalDiff = 0;

            // Created to loop through friend scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Math to compare new friend score to existing friends
                var diff = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                totalDiff += diff;

                if (totalDiff < minDiff) {
                    matchIndex = i;
                    minDiff = totalDiff;
                    console.log(bestFriend);
                }
            }
        }
        // Add friend scores
        friends.push(newFriend);
        res.json(newFriend[matchIndex]);
    });
}