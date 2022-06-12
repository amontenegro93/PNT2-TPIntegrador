var express = require('express');
const {getPerrosController, getPerroController,createPerroController} = require('../controllers/perroController');
var router = express.Router();

router.get('/:id', getPerroController
)

router.get('/', getPerrosController
)

router.post('/', createPerroController
  
)

module.exports = router;