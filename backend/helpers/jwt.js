const jwt = require('jsonwebtoken');

const criarToken = () => {
  const payload = {
    userId: 123,
    username: 'usuario123'
  };

  const SECRET_KEY = process.env.SECRET_KEY 
  return jwt.sign(payload, SECRET_KEY);
}

module.exports = {
  criarToken
};

