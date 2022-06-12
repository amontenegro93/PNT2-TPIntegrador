const perro = require("../models/perro");

const rutinaController = require("../controllers/rutinaController");

const rutina = require("../models/rutina");

const rutinaRepositories = [
    new rutina("123456","juan perez",5,"Lunes a las 15hs","Chico","San telmo",1500,["Pepe","Panza","Mishi","Negro","Tito"]),
    new rutina("123567","juana gomez",3,"Martes a las 16hs","Grande","Barracas",2000,["Coco","Firulais"]),
]

const repositorioRutinas = {
    validarMaximoPerros: (rutina) =>{
            //true= se puede agregar
            return rutina.perros.length<rt.cantidadPerros
            },
    agregarPerro: (rutina,perro) =>{
            if(validarMaximoPerros(rutina)){
                rutina.perros.push(perro)
            }
    },
    
    agregar: (rutina) => {
        rutinaRepositories.push(rutina)
    }

}

module.exports = {
    rutinaRepositories
}