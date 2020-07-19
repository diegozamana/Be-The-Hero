const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
/* Informa o Express para converter o corpo da requisição em um objeto javascript */
app.use(express.json());
app.use(routes);

/*
  GET:    Busca informação
  POST:   Cria informação
  PUT:    Altera informação
  DELETE: Apaga informação
*/

/*
  Tipos de Parâmetros:

  Query:        Parametros nomeados enviados nas rotas após o símbolo de "?" (Filtros, paginação)
  Route:        Parametros utilizados para identificar recursos
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
  Bancos de Dados

  SQL:    MySQL, SQLite, PostGreeSQL, Oracle, MSSQL Server
  NoSQL:  MongoDB, CouchDB, etc

  Driver:         SELECT * FROM users
  Query Builder:  table('users').select('*').where()
*/

app.listen(3333);
