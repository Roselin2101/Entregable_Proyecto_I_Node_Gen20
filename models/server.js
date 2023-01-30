const express = require('express');
const { repairsRouter } = require('../routes/repairs.routes');

//1. Creo una clase

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 6200;

    this.paths = {
      users: 'api/v1/users',
      repairs: '/api/v1/repairs',
    };

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json());
  }
  // Rutas
  routes() {
    this.app.use(this.paths.repairs, repairsRouter);
  }
  // Metodo para escuchar solicitudes por el puerto
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port', this.port);
    });
  }
}

//2. Exporto el servidor
module.exports = Server;
