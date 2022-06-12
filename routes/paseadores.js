var express = require('express');
const {getPaseadoresController, getPaseadorController,createPaseadorController,agregarPerroController} = require('../controllers/paseadorController');
var router = express.Router();

router.get('/:id', getPaseadorController
)

router.get('/', getPaseadoresController
)

router.post('/', createPaseadorController
  
)

router.post('/agregarPerro', agregarPerroController
  
)


module.exports = router;