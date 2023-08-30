const express = require('express');
const router = express.Router();
const {gerarToken} = require('../controllers/authController');

router.get('/gerar-token', gerarToken);




module.exports = router;
