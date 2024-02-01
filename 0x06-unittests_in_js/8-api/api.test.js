const request = require('supertest');

const app = require('./api');

const chai = require('chai');

chai.use(require('chai-http'));

const expect = chai.expect;

describe('Index Page', () => {
  it('should return correct status code', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the message "Welcome to the payment system"', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should handle other routes with a 404 status code', (done) => {
    request(app)
      .get('/nonexistentroute')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});