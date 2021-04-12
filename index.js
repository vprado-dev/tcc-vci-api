const express = require('express');
const dotenv = require('dotenv');
const { json } = require('body-parser');
const cors = require('cors');
const { db } = require('./config/objetos');
const morgan = require('morgan');
const app = express();
dotenv.config();

app.use(json());
app.use(morgan('dev'));
app.use(cors());

//Testando conexão
async () => {
  try {
    await db.authenticate();
    console.log('Conectou.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.get('/', async function (req, res) {});
//Rota login
app.use('/login', require('./routes/login'));
app.use('/users', require('./routes/users'));
app.use('/ranking', require('./routes/ranking'));
app.use('/game', require('./routes/game'));
app.use('/perguntados', require('./routes/perguntados'));
app.use('/quiz', require('./routes/quiz'));

app.use((error, req, res, next) => {
  return res.status(500).json({
    status: 'error',
  });
});

var port = 3333;
app.listen(port, function () {
  console.log('Servidor ativo na porta ' + port);
});
