const express = require('express');
const cors = require('cors');



class Server {


    // constructor contiene las propiedades de la clase Server
    //podemos observar que hay una propiedad app la cual ejecuta la funcion express,
    // port, que ejecutal a variable de entorno PORT.
    // middlewares que inicializa metodos de la clase server asi como routes.
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas de mi apliación
        this.routes();
    }
    middlewares() {
        //directorio público
        this.app.use(express.static('public'));
        
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());
    }

    routes() {

        this.app.use( this.usuariosPath, require('../routes/usuarios'))

    }

    listen() {  

        this.app.listen(this.port, () => {
            console.log(`Servidor encendido en el puerto: ${this.port}`);
        });
    };
};

module.exports = Server;
