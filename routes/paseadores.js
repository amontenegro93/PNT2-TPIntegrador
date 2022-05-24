var express = require('express');
var router = express.Router();

/* GET Lista paseadores. */
router.get('/', function(req, res, next) {
  let paseadores = [{id:1234},{id:5678}]
  res.json(paseadores)
  res.send(paseadores);
});

router.get('/:id', function(req, res, next){
  let paseadores = [{id:1234},{id:5678}]

})

router.post('/', function(req, res, next){
  
})

router.delete('/', function(req, res, next){
  
})

router.put('/', function(req, res, next){
  
})

router.patch('/', function(req, res, next){
  
})


module.exports = router;