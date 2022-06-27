const cantPerrosMaxException = require('../exceptions/cantPerrosMax');
const estaEnPaseoException = require('../exceptions/estaEnPaseo');
const rutinaActivaException = require('../exceptions/rutinaActiva');


const validarMaximoPerros = (paseador) =>{
    //true= se puede agregar
    if(paseador.perros.length>=paseador.cantidadMaxPerros){
        throw new cantPerrosMaxException
        }
    }

const validarEstaEnPaseo = (paseador) =>{
    //true= no se puede agregar
    if(paseador.enPaseo===true){
        throw new estaEnPaseoException
        }
    }

const validarNoEstaEnPaseo = (paseador) =>{
    //true= no se puede agregar
    if(paseador.enPaseo===false){
        throw new estaEnPaseoException
        }
    }

const validarRutinaActiva = (paseador) =>{
        //true= no se puede agregar
    if(paseador.rutinaActiva!=null){
        throw new rutinaActivaException
        }

    }

const validarRutinaActivaEnNull = (paseador) =>{
        //true= no se puede agregar
if(paseador.rutinaActiva===null){
    throw new rutinaActivaException
    }
}

module.exports = {
    validarMaximoPerros,
    validarEstaEnPaseo,
    validarNoEstaEnPaseo,
    validarRutinaActiva,
    validarRutinaActivaEnNull
}

