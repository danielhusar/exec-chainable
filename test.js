'use strict';
var assert = require('assert');
var exec  = require('./index.js');

it('It should chain promisses', function (cb) {

  exec('echo 1').then(function (stdout) {
    assert.equal(stdout, 1);
    return exec('echo 2');
  }).done(function (stdout) {
    assert.equal(stdout, 2);
    cb();
  });

});
