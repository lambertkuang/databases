var db = require('../db/index');
var bluebird = require('bluebird');
// var utils = require('../utils')




module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * from messages', function(err, results){
        if(err) throw err;
        callback(results);
      });
      // how are we going to get all the messages from DB
      // sql returns an array of objects (table rows)


    }, // a function which produces all the messages
    post: function (request, callback) {
      console.log(request.body)
      db.query('INSERT into messages SET ?', request.body, function(err, results) {
        if(err) throw err;
        callback(results);
      });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username from users', function(err, results){
        if(err) throw err;
        callback(results);
      });
    },
    post: function (request, callback) {
      var user = request.body.username;
      var msg = request.body.message;
      db.query('INSERT into users (username) values("' + user + '")', function(err, results) {
        if(err) throw err;
        callback(results)
      });
    }
  }
};

