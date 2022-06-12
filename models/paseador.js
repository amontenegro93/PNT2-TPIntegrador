import perro from "./perro";
const rutina = require("./rutina");


module.exports = function(id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa){
    this.id = id;
    this.dni = dni;
    this.nombreApellido = nombreApellido;
    this.telefono = telefono;
    this.cantidadMaxPerros = cantidadMaxPerros;
    this.tarifa = tarifa;
    this.perros = [];
}

