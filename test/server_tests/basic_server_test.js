'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var mongoose = require('mongoose');

process.env.MONGO_URL = 'mongodb://localhost/karaoke_jukebox_test';

var server = require(__dirname + '/../../server.js');

var kjPORT = ':' + (process.env.PORT || 3000);
var kjURL = (process.env.KJURL || 'localhost') + kjPORT;

describe('the karaoke jukebox server', function() {
  it('should exist, with a database connection', function(done) {
    chai.request(kjURL)
    .get('/')
    .end(function(err, resp) {
      expect(err).to.eql(null);
      expect(typeof resp.body).to.eql('object');
      done();
    });
  });

  require(__dirname + '/socket_integration_tests');
  require(__dirname + '/lyrics_tests');
  require(__dirname + '/users_tests');

  after(function() {
    server.shutDown();
  });
});