const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // middelwares
        this.middelwares();

        // routes
        this.routes();
    }

    middelwares() {
        // CORS
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/api/pv', require('../routes/puntoventa'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('run in port ', this.port);
        })
    }
}

module.exports = Server;