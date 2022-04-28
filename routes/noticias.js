const express = require('express');
const noticiasController = require('../controllers/noticias.controller');


const router = express.Router();

router.get('/', noticiasController.listarIndex);
router.get('/noticias', noticiasController.listarTudo);
router.get('/noticia', noticiasController.listarUma);

module.exports = router;
