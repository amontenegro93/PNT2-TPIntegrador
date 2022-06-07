const rutina = require('../models');
const { rutinaRepositories } = require('../repositories/rutinaRepositories');

const listaRutinas = function(req,res,next){
    let rutinas = rutinaRepositories;

    res.json(rutinas);
}

