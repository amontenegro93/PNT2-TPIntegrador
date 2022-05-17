const { expect } = require ('chai');
const { it } = require('mocha');
const app = require('../app');
const axios = require('axios')
const paseadores = require('../routes/paseadores');

describe('test', ()=>{
  describe('Server', ()=>{
    it('server is on', async ()=>{
      const response = await axios.get('http://localhost:3000/')
      expect(response.status).to.equal(200);
    })

    it('server is on', async ()=>{
      //preguntar a paseadores en vez de axios.get
      const response = await axios.get('http://localhost:3000/paseadores')
      expect(response.status).to.equal(200);
    })

  })
});