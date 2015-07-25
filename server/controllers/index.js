var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');



module.exports = {
  messages: {
    get: function (req, res) {
        console.log("talking to models")      
      models.messages.get(function(data) {
        utils.sendResponse(res, data);
      }); //what do we do with the array of objects
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req, function(results){
        utils.sendResponse(response, results, 200);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

