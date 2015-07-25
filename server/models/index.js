var db = require('../db/index');
var bluebird = require('bluebird');
// var utils = require('../utils')




module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT message from messages', function(err, results){
        if(err) throw err;
        callback(results);
      });
      // how are we going to get all the messages from DB
      //use sql query
      // sql returns an array of objects (table rows)


    }, // a function which produces all the messages
    post: function (request, callback) {
      var user = request.body.username;
      var msg = request.body.text;
      db.query('INSERT into messages (message) values("' + msg + '")', function(err, results) {
        if(err) throw err;
        callback(results)
      });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

