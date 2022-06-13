const Paseador = require('../models/paseador');
const Perro = require('../models/perro')
const { paseadoresRepositories } = require('../repositories/paseadoresRepositories');
const { repositorioPaseadores } = require('../repositories/paseadoresRepositories');
const Validador = require('../services/validador');

const listaPaseadores = function(req,res,next){
    let paseadores = paseadoresRepositories;

    res.json(paseadores);
}

const getPaseadorInterno = function(idBuscado){
    let paseadores = paseadoresRepositories;
    const paseador = paseadores.find(uno => idBuscado == uno.id)

    if (paseador===null || paseador === undefined){
        return "paseador no encontrado"
    } else {
        return paseador
    }
}

module.exports = {
    getPaseadoresController : listaPaseadores,
    
    //buscador de paseador para que no se repita
    getPaseadorController: function(req, res, next){
        let paseadores = paseadoresRepositories;
        const paseador = paseadores.find(uno => req.params.id == uno.id)

        if (paseador===null || paseador === undefined){
            res.status(404)
            res.json({message:"paseador no encontrado"})
        } else {
            res.status(200)
            res.json(paseador);
        }
    },

    createPaseadorController: (req,res) => {
    const {id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa,perros} = req.body

    const paseador = new Paseador(id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa,perros)
    
    try {
        repositorioPaseadores.agregar(paseador)

        res.status(201)
        res.json(paseador)
    }catch(e){
        console.error(e)
        res.status(409)
        res.json(paseador)
    }    
    },

    agregarPerroController:(req,res)=>{
        const {idPerro,nombre,telefono,direccion,idPaseador} =req.body
        const perro = new Perro(idPerro,nombre,telefono,direccion)
        const paseadorBuscado = getPaseadorInterno(idPaseador)
        
        try {
            Validador.validarMaximoPerros(paseadorBuscado)
            repositorioPaseadores.agregarPerro(paseadorBuscado,perro)
            res.status(201)
            res.json(perro)
        }catch(e){
            console.error("paseador lleno")
            res.status(409)
            res.json({message:"paseador lleno"})
        }   
    }
}