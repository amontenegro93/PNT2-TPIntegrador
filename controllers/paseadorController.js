const paseador = require('../models/paseador');
const { paseadoresRepositories } = require('../repositories/paseadoresRepositories');

const listaPaseadores = function(req,res,next){
    let paseadores = paseadoresRepositories;

    res.json(paseadores);
}

