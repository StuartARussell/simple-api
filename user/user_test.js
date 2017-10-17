//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let user = require('./user');

/* Require the dev dependencies*/
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

/* Test the get route */
describe('/GET user', () => {
    it('it should GET all the users', (done) => {
        chai.request(server)
        .get('/user')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });
});