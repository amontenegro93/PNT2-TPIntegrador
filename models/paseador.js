//import perro from "./perro";

module.exports = function(id,dni,nombreApellido,telefono,cantidadMaxPerros,tarifa,perros){
    this.id = id;
    this.dni = dni;
    this.nombreApellido = nombreApellido;
    this.telefono = telefono;
    this.cantidadMaxPerros = cantidadMaxPerros;
    this.tarifa = tarifa;
    this.perros = perros;
    this.pasear = function(){
        this.enPaseo = true
        console.log(`${this.nombreApellido} empezo a pasear a los perros`)
    }
    this.terminarPaseo = function(){
        this.enPaseo=false
        console.log(`${this.nombreApellido} termino de pasear a los perros`)
    }
}

