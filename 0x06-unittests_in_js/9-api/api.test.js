const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('./api'); // Assuming your Express app file is named 'api.js'

chai.use(chaiHttp);

const expect = chai.expect;

describe('Index Page', () => {
  it('should return correct status code and message at root path', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  describe('Cart Page', () => {
    it('should return correct status code when :id is a number', (done) => {
      chai.request(app)
        .get('/cart/123')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 123');
          done();
        });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
      chai.request(app)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});