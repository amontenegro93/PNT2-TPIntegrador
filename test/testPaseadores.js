const { expect } = require ('chai');
const { it } = require('mocha');
const app = require('../app');
const axios = require('axios')
const paseadores = require('../routes/paseadores');

describe('paseadores', ()=>{
  describe('GET paseadores', ()=>{
    it('trae lista paseadores', async ()=>{
      //preguntar a paseadores en vez de axios.get
      const response = await axios.get('http://localhost:3000/paseadores');
      expect(response.data).to.eql([{id:1234},{id:5678}])
    })

  })

    describe('GET paseadores/:id', ()=>{
      it('trae un paseador por id', async ()=>{
        const response = await axios.get('http://localhost:3000/paseadores/1234');
        expect(response.data).to.eql([{id:1234}])
      })

    })

    describe('POST/paseadores', () =>{
      it('crea  un paseador', ()=>{
          
      })
    })

    describe('DELETE/paseadores', () =>{
        it('borra un paseador', ()=>{
            
        })
      })

    describe('PATCH/paseadores', () =>{
      it('edita un paseador', ()=>{
          
      })
    })

    describe('PUT/paseadores', () =>{
      it('edita un paseador', ()=>{
          
      })
    })

});