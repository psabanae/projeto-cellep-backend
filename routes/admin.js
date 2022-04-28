const express = require('express');
const adminController = require('../controllers/admin.controller');

const router = express.Router();


router.get('/admin', adminController.getForm);
router.post('/admin/salvar-noticia', adminController.gravarNoticia);

module.exports = router;
