const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
const app = require('../app')
const { expect } = chai
const spies = require('chai-spies')
chai.use(spies)

const {validarMaximoPerros} = require('../services/validador')
const Paseador = require('../models/paseador')
const CantPerrosMaxException = require('../exceptions/cantPerrosMax')
//const { repositorioPaseadores } = require('../repositories/paseadoresRepositories')

describe("Service Validador", ()=>{
    describe("Validar cantidad maxima perros", ()=>{
        describe("cuando un paseador esta lleno", ()=>{
            it("lanza una excepcion", ()=>{
                chai.spy.on(validarMaximoPerros, ()=> true)
                const paseador1 = new Paseador("1235","12345679","juana gomez","44443333",3,2000,["perro5","perro6","perro7"])
                expect(()=>validarMaximoPerros(paseador1).to.throw(CantPerrosMaxException))
            })
        })
        describe("cuando un paseador tiene espacio", ()=>{
            it("no lanza una excepcion",()=>{
                chai.spy.on(validarMaximoPerros, ()=> false)
                const paseador1 = new Paseador("1235","12345679","juana gomez","44443333",3,2000,["perro5","perro6","perro7"])
                expect(()=>validarMaximoPerros(paseador1).not.to.throw(CantPerrosMaxException))

            })
        })
    })

})