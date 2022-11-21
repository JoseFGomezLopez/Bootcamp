const express = require('express')
const cors= require('cors');
const connect = require('./utils/database/database')
const userRoutes = require('./api/routes/user.routes');

connect();

const server = express();

server.use(express.json());

server.use(express.urlencoded({
    extended : false
}));

server.use(cors());

server.use('/',userRoutes);

server.use((req, res, next) => {
    setImmediate(() => {
      next(new Error('Something went wrong'))
    })
  })
  
  server.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
  })
  
  server.listen(process.env.PORT, () => console.log('Listen'))