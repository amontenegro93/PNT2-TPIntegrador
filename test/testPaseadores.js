
const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe } = require('mocha')
// const axios = require('axios')
const app = require('../app')
// import app from '../app'
const { expect } = chai
const spies = require('chai-spies')
chai.use(spies)

chai.use(chaiHttp)

describe('paseadores', ()=>{
  describe('GET /paseadores', ()=>{
    it('trae lista paseadores', async ()=>{
      chai.request(app)
      .get('/paseadores')
      .end((_, res) =>{
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(JSON.parse(res.text))
        .to.eql([
          {id: "1234",dni:"12345678",nombreApellido:"juan perez",telefono:"44442222",cantidadMaxPerros:5,tarifa:1500,perros:["perro1","perro2","perro3","perro4"],enPaseo:false,rutinaActiva:null},
          {id: "1235",dni:"12345679",nombreApellido:"juana gomez",telefono:"44443333",cantidadMaxPerros:3,tarifa:2000,perros:["perro5","perro6","perro7"],enPaseo:false,rutinaActiva:null}
        ])
      })
    })

  })

    describe('GET paseadores/:id', ()=>{
      it('trae un paseador por id', async ()=>{
        chai.request(app)
        .get('/paseadores/1234')
        .end((_, res) => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
            .to.eql({ id: "1234",dni:"12345678",nombreApellido:"juan perez",telefono:"44442222",cantidadMaxPerros:5,tarifa:1500,perros:["perro1","perro2","perro3","perro4"],enPaseo:false,rutinaActiva:null })          
        })
      })
        
      it("da error con un paseador que no existe", async () => {

      chai.request(app)
        .get('/paseadores/1111')
        .end((_, res) => {
          expect(res).to.have.status(404)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
            .to.eql({ message: "paseador no encontrado" })          
        })
    })

    })})

    describe('POST/ paseadores', () =>{
      describe('POST/ creear paseador', () =>{
        it("crea  un paseador", ()=>{
          chai.request(app)
          .post('/paseadores')
          .send({ id: "2222",
                  dni:"12322222",
                  nombreApellido:"Carlos Alvarez",
                  telefono:"44449999",
                  cantidadMaxPerros:4,
                  tarifa:2500,
                  perros:["perro22","perro23","perro32","perro42"],
                  enPaseo:false,
                  rutinaActiva:null
                })
          .end((_,res)=>{
            expect(res).to.have.status(201)
            expect(res).to.be.json
            expect(JSON.parse(res.text))
              .to.eql({ id: "2222",
                dni:"12322222",
                nombreApellido:"Carlos Alvarez",
                telefono:"44449999",
                cantidadMaxPerros:4,
                tarifa:2500,
                perros:["perro22","perro23","perro32","perro42"],
                enPaseo:false,
                rutinaActiva:null
          })
          })
      })
      it("crea  un paseador y lo muestra en la base", ()=>{
        chai.request(app)
              .post('/paseadores')
              .send({ id: "3333",
              dni:"12323333",
              nombreApellido:"Pedro Picapiedra",
              telefono:"44440000",
              cantidadMaxPerros:1,
              tarifa:5000,
              perros:["perro22"],enPaseo:false,rutinaActiva:null
        })
        .end((_,res)=>{
          expect(res).to.have.status(201)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
            .to.eql({ id: "3333",
              dni:"12323333",
              nombreApellido:"Pedro Picapiedra",
              telefono:"44440000",
              cantidadMaxPerros:1,
              tarifa:5000,
              perros:["perro22"],enPaseo:false,rutinaActiva:null
        })
        })

        chai.request(app)
        .get('/paseadores')
        .end((_, res) =>{
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
          .to.eql([
            {id: "1234",dni:"12345678",nombreApellido:"juan perez",telefono:"44442222",cantidadMaxPerros:5,tarifa:1500,perros:["perro1","perro2","perro3","perro4"],enPaseo:false,rutinaActiva:null},
            {id: "1235",dni:"12345679",nombreApellido:"juana gomez",telefono:"44443333",cantidadMaxPerros:3,tarifa:2000,perros:["perro5","perro6","perro7"],enPaseo:false,rutinaActiva:null},
            {id: "2222",dni:"12322222",nombreApellido:"Carlos Alvarez",telefono:"44449999",cantidadMaxPerros:4,tarifa:2500,perros:["perro22","perro23","perro32","perro42"],enPaseo:false,rutinaActiva:null},
            { id: "3333",
              dni:"12323333",
              nombreApellido:"Pedro Picapiedra",
              telefono:"44440000",
              cantidadMaxPerros:1,
              tarifa:5000,
              perros:["perro22"],enPaseo:false,rutinaActiva:null
        }
          ])
        })
    })
    })
        describe('POST/ agregar perro', () =>{
        it("agrega un perro", ()=>{
          chai.request(app)
          .post('/paseadores/agregarPerro')
          .send({ idPerro: "2222",
                  nombre:"perrito",
                  telefono:"44449999",
                  direccion:"avenida 1",
                  idPaseador:"1234"
                })
          .end((_,res)=>{
            expect(res).to.have.status(201)
            expect(res).to.be.json
            expect(JSON.parse(res.text))
              .to.eql({ id: "2222",
              nombre:"perrito",
              telefono:"44449999",
              direccion:"avenida 1",
            })
          })
      })
      it("no agrega un perro porque el paseador esta lleno", ()=>{
        chai.request(app)
        .post('/paseadores/agregarPerro')
        .send({ idPerro: "2222",
                nombre:"perrito",
                telefono:"44449999",
                direccion:"avenida 1",
                idPaseador:"1235"
              })
        .end((_,res)=>{
          expect(res).to.have.status(409)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
          .to.eql({ message: "paseador lleno" })
          })
        })
    })
    describe('POST/ empieza la rutina', () =>{
      it("empieza la rutina", ()=>{
        chai.request(app)
        .post('/paseadores/empezarRutina')
        .send({ id: "111",
                perros:["2222","3333", "4444"],
                idPaseador: "1234"
              })
        .end((_,res)=>{
          expect(res).to.have.status(201)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
            .to.eql({ id: "111",
            perros:["2222","3333", "4444"],

          })
        })
    })
    
    })

    describe('POST/ terminar la rutina', () =>{
      it("terminar la rutina", ()=>{
        chai.request(app)
        .post('/paseadores/terminarRutina')
        .send({ idPaseador: "1234"
              })
        .end((_,res)=>{
          expect(res).to.have.status(201)
          expect(res).to.be.json
          expect(JSON.parse(res.text))
            .to.eql({id: "1234",dni:"12345678",nombreApellido:"juan perez",telefono:"44442222",cantidadMaxPerros:5,tarifa:1500,perros:["perro1","perro2","perro3","perro4", {
                    "direccion": "avenida 1",
                    "id": "2222",
                    "nombre": "perrito",
                    "telefono": "44449999"
                  }],enPaseo:false,rutinaActiva:null})
        })
    })
    
    })


    })