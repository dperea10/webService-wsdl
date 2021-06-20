const express = require('express');
const cors    = require('cors');
const soap = require('soap');


const {soapGetFootballPooll} = require('../services/soaps/getFootballPooll/soapGetFootballPooll');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            gameScoreResult : '/api/game-soccer',
            resultsAllGames : '/api/game-soccer',
            teamNames       : '/api/game-soccer',
        }
        // connection database
        this.soapConnect();

        // Middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    soapConnect() {
        soapGetFootballPooll();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );
        // read parser
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.paths.gameScoreResult, require('../routes/gameScoreResult'));
        this.app.use( this.paths.resultsAllGames, require('../routes/resultsAllGames'));
        this.app.use( this.paths.teamNames,       require('../routes/teamNames'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
           
        });
       
    }

}

module.exports = Server;