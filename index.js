'use strict';

var exec = require('child_process').exec;
var q = require('q');

var execChainable = function (command) {
  var deferred = q.defer();

  exec(command, function(err, stdout, stderr) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(stdout, stderr);
    }
  });

  return deferred.promise;
};

module.exports = execChainable;
