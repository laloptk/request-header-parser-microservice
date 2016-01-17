'use strict';

var GetCorrectStrings = require(process.cwd() + '/app/controllers/controller.js');

module.exports = function (app) {
   var getCorrectStrings = new GetCorrectStrings();

   app.route('/')
      .get(function (req, res) {
         res.send(getCorrectStrings.processStrings(req));
      });
};
