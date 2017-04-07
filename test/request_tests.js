const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server.js');

const should = chai.should();
const app =  server.app;

chai.use(chaiHttp);

describe('User insurance policy form', function() {
  it('should return users on GET /api/users', function() {
    chai.request(app)
      .get('/api/users')
      .end(function(err, res) {
        res.should.have.status(200);
    });
  })
})