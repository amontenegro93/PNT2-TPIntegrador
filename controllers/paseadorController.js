const paseador = require('../models/paseador');
const { paseadoresRepositories } = require('../repositories/paseadoresRepositories');

const listaPaseadores = function(req,res,next){
    let paseadores = paseadoresRepositories;

    res.json(paseadores);
}

module.exports = {
    getPaseadoresController : listaPaseadores,
    
    //buscador de paseador para que no se repita
    getPaseadorController: function(req, res, next){
        let paseadores = paseadoresRepositories;
        const paseador = paseadores.find(uno => req.params.id == uno.dni)

        if (paseador===null || paseador === undefined){
            res.status(404)
            res.json({message:"paseador no encontrado"})
        } else {
            res.status(200)
            res.json(paseador);
        }
    },

    createPaseadorController: (req,res) => {
    const {id,dni,nombreApellido,rutina,telefono} = req.body

    const paseador = new Paseador(id,dni,nombreApellido,rutina,telefono)
    
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

    agregarRutinaPaseadorController:()
}