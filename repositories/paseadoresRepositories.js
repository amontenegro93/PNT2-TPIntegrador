const paseador = require('../models/paseador');

const paseadoresRepositories = [
    new paseador("1234","12345678","juan perez","44442222",5,1500,["perro1","perro2","perro3","perro4"],false,null),
    new paseador("1235","12345679","juana gomez","44443333",3,2000,["perro5","perro6","perro7"],false,null),
]

const repositorioPaseadores = {
    agregarPerro: (paseador,perro) =>{
            paseador.perros.push(perro)
    },
    agregar: (paseador) => {
        paseadoresRepositories.push(paseador)
    },
    agregarRutina: (paseador,rutina) =>{
        paseador.rutinaActiva = rutina
    },
    quitaRutina: (paseador) =>{
        paseador.rutinaActiva = null
    },
    empezarRutina: (paseador) =>{
        paseador.pasear()
    },
    terminarRutina: (paseador) =>{
        paseador.terminarPasear()
    },


}

module.exports = {
    paseadoresRepositories,
    repositorioPaseadores
}