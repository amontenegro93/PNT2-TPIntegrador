const chai = require('chai')
const { expect } = require ('chai');
const { it } = require('mocha');
const app = require('../app');
const axios = require('axios')

describe('test', ()=>{
  describe('Server', ()=>{
    it('server is on', async ()=>{
      const response = await axios.get('http://localhost:5500/')
      expect(response.status).to.equal(200);
    })
  })
});