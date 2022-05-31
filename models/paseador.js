import rutina from "./rutina";
const rutina = require("./rutina");

module.exports = function(id,dni,nombreApellido,telefono){
    this.id = id;
    this.dni = dni;
    this.nombreApellido = nombreApellido;
    //rutinas = rutina[];
    this.telefono = telefono;
}