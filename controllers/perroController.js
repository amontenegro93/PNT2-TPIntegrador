//const paseador = require('../models/paseador');
const Perro = require('../models/perro')
const { perrosRepositories } = require('../repositories/paseadoresRepositories');

const listaPerros = function(req,res,next){
    let perros = paseadoresRepositories;

    res.json(perros);
}

module.exports = {
    getPerrosController : listaPerros,
    
    //buscador de paseador para que no se repita
    getPerroController: function(req, res, next){
        let perros = perrosRepositories;
        const perro = perros.find(uno => req.params.id == uno.id)

        if (perro===null || perro === undefined){
            res.status(404)
            res.json({message:"perro no encontrado"})
        } else {
            res.status(200)
            res.json(perro);
        }
    },

    createPerroController: (req,res) => {
    const {id,nombre,telefono,direccion} = req.body

    const perro = new Perro(id,nombre,telefono,direccion)
    
    try {
        repositorioPerros.agregar(perro)

        res.status(201)
        res.json(perro)
    }catch(e){
        console.error(e)
        res.status(409)
        res.json(perro)
    }    
    },

}