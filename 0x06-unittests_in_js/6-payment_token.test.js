const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a success message', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API'});
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
