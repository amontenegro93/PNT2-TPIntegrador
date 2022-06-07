import perro from "./perro";
const rutina = require("./rutina");


module.exports = function(id,dni,nombreApellido,rutina,telefono){
    this.id = id;
    this.dni = dni;
    this.nombreApellido = nombreApellido;
    this.rutina = rutina;
    this.perros = [];
    this.telefono = telefono;
    
}

