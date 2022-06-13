const cantPerrosMaxException = require('../exceptions/cantPerrosMax');
const { repositorioPaseadores } = require('../repositories/paseadoresRepositories');

const validarMaximoPerros = (paseador) =>{
    //true= se puede agregar
    if(paseador.perros.length>=paseador.cantidadMaxPerros){
        throw new cantPerrosMaxException
        }
        }

module.exports = {
    validarMaximoPerros
}

