const paseador = require('../models/paseador');
const Perro = require('../models/perro')
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
    const {id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa} = req.body

    const paseador = new Paseador(id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa)
    
    try {
        //paseadoresRepositories
        //repositorioPaseadores
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
        const {id,nombre,telefono,direccion} =req.body
        const perro = new Perro(id,nombre,telefono,direccion)
        const paseador = new Paseador(id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa)
        
        try {
            repositorioPaseadores.agregarPerro(pasedor,perro)

            res.status(201)
            res.json(paseador)
        }catch(e){
            console.error(e)
            res.status(409)
            res.json(paseador)
        }   
    }
}