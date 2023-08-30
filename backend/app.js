const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());

app.use('/auth', require('./routers/authRoutes'));


app.get('/', (req, res) => {
    res.render('index');
  });

app.listen(PORT, () => {
  console.log(`Servidor ON${PORT}`);
});



