const path = require('path');

const friends = require('../data/friends.js');

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(friends);
  });

  app.post('/api/friends', function(req,res){
    let userInput = req.body;

    let userResponses = userInput.scores;

    let matchName = '';
    let matchImage = '';
    let totalDifference = 10000;

    for(var i =0; i<friends.length; i++){
      let diff = 0;
      for(var j =0; j< userResponses.length;j++){
        diff+=Math.abs(friends[i].scores[j] - userResponses[j]);
      }

      if(diff < totalDifference){
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    friends.push(userInput);

    res.json({status:'OK', matchName: matchname, matchImage: matchImage});
  });
};
