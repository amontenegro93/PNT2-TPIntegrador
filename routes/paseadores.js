var express = require('express');
const {getPaseadoresController, getPaseadorController,createPaseadorController,agregarPerroController,empezarRutinaController,terminarRutinaController} = require('../controllers/paseadorController');
var router = express.Router();

router.get('/:id', getPaseadorController
)

router.get('/', getPaseadoresController
)

router.post('/', createPaseadorController
  
)

router.post('/agregarPerro', agregarPerroController
  
)
router.post('/empezarRutina', empezarRutinaController
  
)
router.post('/terminarRutina', terminarRutinaController
  
)


module.exports = router;