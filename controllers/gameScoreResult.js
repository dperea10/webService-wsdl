const { response, 
        request } = require('express');
const path        = require('path');
const fs          = require('fs');
const soap        = require('soap');

const url = `${process.env.URL_SOAP_WEBSERVER}`;

const getGameScoreResult = (req = request, res = response ) => {

    //Se obtiene el body para luego consultar en los soaps
    let { iGameNumber } = req.body;

    let args = {iGameNumber: iGameNumber}

    try {

        soap.createClient(url, function(err, client) {

            if (client) {
                 //al tener la url del soaps se consulta directo a la función enviado los argumentos
                client.GameScore(args, function (error, data) {
                    if (err) {
                        res.status(500).json(error);
                    }else{
                        res.status(200).json(data);
                    }
                })
            }else {
                console.log( err);
            } 
        });
    }catch (error) {
       res.status(500).json(error);
    }
} ;

module.exports = {
    getGameScoreResult

}
