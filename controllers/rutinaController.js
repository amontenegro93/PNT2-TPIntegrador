const rutina = require('../models');
const { rutinaRepositories } = require('../repositories/rutinaRepositories');

const listaRutinas = function(req,res,next){
    let rutinas = rutinaRepositories;

    res.json(rutinas);
}

module.exports = {
    getRutinasController : listaRutinas,
    
    //buscador de rutinas para que no se repita
    getRutinaController: function(req, res, next){
        let rutinas = paseadoresRepositories;
        const rutina = rutinas.find(uno => req.params.id == uno.id)

        if (rutina===null || rutina === undefined){
            res.status(404)
            res.json({message:"rutina no encontrado"})
        } else {
            res.status(200)
            res.json(rutina);
        }
    },

    createrutinaController: (req,res) => {
    const {id,cantidadPerros,diaHora,tipoPerros,ruta,tarifa} = req.body

    const rutina = new Rutina(id,cantidadPerros,diaHora,tipoPerros,ruta,tarifa)
    
    try {
        repositorioPaseadores.agregar(paseador)

        res.status(201)
        res.json(paseador)
    }catch(e){
        console.error(e)
        res.status(409)
        res.json(paseador)
    }
        
}
}