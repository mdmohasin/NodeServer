const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');

const expect = chai.expect;

chai.use(chaiHttp);
const loginParamsTrue = {
    username: 'mohasin',
    password: 'mohasin',
};
const loginParamsFalse = {
    usernam: 'mohasin',
    password: 'mohasin',
};
/* global describe x:true*/
/* global it x:true*/
describe('check login request', () => {
    it('should validate params', (done) => {
        chai.request(server)
            .post('/login')
            .send(loginParamsTrue)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const response = JSON.parse(res.text);
                expect(response.success).to.equal(true);
                done();
            });
    });
    it('should not validate params', (done) => {
        chai.request(server)
            .post('/login')
            .send(loginParamsFalse)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const response = JSON.parse(res.text);
                expect(response.success).to.equal(false);
                done();
            });
    });
    it('should validate JWT', (done) => {
        chai.request(server)
            .post('/login')
            .send(loginParamsTrue)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                const response = JSON.parse(res.text);
                expect(response.result).to.be.a('string');
                done();
            });
    });
});
