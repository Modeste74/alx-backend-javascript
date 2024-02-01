const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

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

  describe('Login Endpoint', () => {
    it('should return welcome message with correct username', (done) => {
      const userName = 'JohnDoe';
      chai.request(app)
        .post('/login')
        .send({ userName })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal(`Welcome ${userName}`);
          done();
        });
    });
  });

  describe('/available_payments Endpoint', () => {
    it('should return an object with available payment methods', (done) => {
      chai.request(app)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });
});