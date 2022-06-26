const cantPerrosMaxException = require('../exceptions/cantPerrosMax');
const estaEnPaseoException = require('../exceptions/estaEnPaseo');


const validarMaximoPerros = (paseador) =>{
    //true= se puede agregar
    if(paseador.perros.length>=paseador.cantidadMaxPerros){
        throw new cantPerrosMaxException
        }
    }

const validarEstaEnPaseo = (paseador) =>{
    //true= no se puede agregar
    if(paseador.enPaseo=true){
        throw new estaEnPaseoException
        }
    }

module.exports = {
    validarMaximoPerros
}

