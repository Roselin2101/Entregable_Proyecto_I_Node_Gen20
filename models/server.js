
const express = require('express')

//1. Creo una clase

class Server{

    constructor() {
        this.app = express();
        this.port = 6200;

        this.routes();
    }
 // Rutas
    routes() {
        this.app.get('/saludar', (req, res) => {
            res.send('Hello  World')
        })

        this.app.get('/misDatos', (req, res) => {
            res.send('Nombre: Roselin, Apellido: Verdu, Edad: 33 años')
        })

        this.app.get('/seriesFavoritas', (req, res) => {
            res.send('Serie 1: Dios no esta muerto, Serie2: Gimy y Georgia, Serie3:Aterrizaje en tu corazon')
        })
    }
 // Metodo para escuchar solicitudes por el puerto 
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port)
        })
    }

}

//2. Exporto el servidor 
module.exports = Server