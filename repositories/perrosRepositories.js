const perro = require('../models/perro');

const perrosRepositories = [
    new perro("1234","Coco","44442233","calle 123"),
    new perro("1235","Tito","44443344","calle 234"),
]

const repositorioPerros = {
    agregar: (perro) => {
        perroRepositories.push(perro)
    }
}

module.exports = {
    perrosRepositories
}