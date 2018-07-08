const request = require('supertest');
const expect = require('chai').expect;
const app = require('./server'); // starts the real server

let runningApp;

describe('get add', () => {
  before((done) => {
    runningApp = request(app);
    done();
  });

  it('get /add/1/7', () => runningApp
    .get('/add/1/7')
    .set('Accept', 'text/html; charset=utf-8')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.text).to.equal('8');
    }));


  it('get /subtract/8/2', () => runningApp
    .get('/subtract/1/7')
    .set('Accept', 'text/html; charset=utf-8')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.text).to.equal('-6');
    }));
});