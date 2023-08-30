const jwt = require('jsonwebtoken');
const {criarToken } = require('../helpers/jwt');

const SECRET_KEY = process.env.SECRET_KEY 

function gerarToken(req, res) {
  
  const payload = {
    userId: 123,
    username: 'usuario123'
  };

  const token = criarToken(payload);

  res.cookie('token', token);

  res.send('Token gerado.');
}

module.exports = {
  gerarToken
};
