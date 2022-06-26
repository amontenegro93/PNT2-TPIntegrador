const rutina = require('../models/rutina');

const rutinaRepositories = [
    new rutina("1234",["perro1","perro2","perro3","perro4"]),
]

const repositorioRutinas = {
    agregarPerro: (rutina,perro) =>{
            rutina.perros.push(perro)
    },
    agregar: (rutina) => {
        rutinaRepositories.push(rutina)
    },
    getRutinas:()=>{
        return rutinaRepositories
    }

}

module.exports = {
    repositorioRutinas
}