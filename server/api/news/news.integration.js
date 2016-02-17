'use strict';

var app = require('../..');
import request from 'supertest';

var newNews;

describe('News API:', function() {

  describe('GET /api/newss', function() {
    var newss;

    beforeEach(function(done) {
      request(app)
        .get('/api/newss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(newss).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/newss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/newss')
        .send({
          name: 'New News',
          info: 'This is the brand new news!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newNews = res.body;
          done();
        });
    });

    it('should respond with the newly created news', function() {
      expect(newNews.name).to.equal('New News');
      expect(newNews.info).to.equal('This is the brand new news!!!');
    });

  });

  describe('GET /api/newss/:id', function() {
    var news;

    beforeEach(function(done) {
      request(app)
        .get('/api/newss/' + newNews._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          news = res.body;
          done();
        });
    });

    afterEach(function() {
      news = {};
    });

    it('should respond with the requested news', function() {
      expect(news.name).to.equal('New News');
      expect(news.info).to.equal('This is the brand new news!!!');
    });

  });

  describe('PUT /api/newss/:id', function() {
    var updatedNews;

    beforeEach(function(done) {
      request(app)
        .put('/api/newss/' + newNews._id)
        .send({
          name: 'Updated News',
          info: 'This is the updated news!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedNews = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedNews = {};
    });

    it('should respond with the updated news', function() {
      expect(updatedNews.name).to.equal('Updated News');
      expect(updatedNews.info).to.equal('This is the updated news!!!');
    });

  });

  describe('DELETE /api/newss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/newss/' + newNews._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when news does not exist', function(done) {
      request(app)
        .delete('/api/newss/' + newNews._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
