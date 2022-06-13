const paseador = require('../models/paseador');
const cantPerrosMaxException = require('../exceptions/cantPerrosMax');

const paseadoresRepositories = [
    new paseador("1234","12345678","juan perez","44442222",5,1500,["perro1","perro2","perro3","perro4"]),
    new paseador("1235","12345679","juana gomez","44443333",3,2000,["perro5","perro6","perro7"]),
]

const repositorioPaseadores = {
    agregarPerro: (paseador,perro) =>{
            paseador.perros.push(perro)
    },
    agregar: (paseador) => {
        paseadoresRepositories.push(paseador)
    }
    
}

module.exports = {
    paseadoresRepositories,
    repositorioPaseadores
}