const chai = require('chai');
const chaiHttp = require('chai-http');
/** not used but implecite call on require */
const launch = require("../src/index");
const should = chai.should();

chai.use(chaiHttp);

const Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe("Router player", () => {

  before(done => {
    Wait(1000).then(() => done()).catch(() => done());
	})

  describe("players", () => {
    it('should list ALL players on /players GET', (done) => {
        chai.request("http://127.0.0.1:8080")
          .get('/players')
          .end((err, res) =>{
            res.should.have.status(200);
            done();
          });
      });
      it('should get player with id 95 on /player/95 GET', (done) => {
        chai.request("http://127.0.0.1:8080")
          .get('/players/95')
          .end((err, res) =>{
            res.should.have.status(200);
            done();
          });
      });
      it('should not get player with id 42 on /player/42 GET', (done) => {
        chai.request("http://127.0.0.1:8080")
          .get('/players/42')
          .end((err, res) =>{
            res.should.have.status(404);
            done();
          });
      });
      it('should delete player with id 95 on /player/95 DELETE', (done) => {
        chai.request("http://127.0.0.1:8080")
          .delete('/players/95')
          .end((err, res) =>{
            chai.request("http://127.0.0.1:8080")
            .delete('/players/95')
            .end((err, res) =>{
              res.should.have.status(404);
              done();
            });
          });
      });
  });
});
