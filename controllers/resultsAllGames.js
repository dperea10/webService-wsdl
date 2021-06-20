const { response, request } = require('express');

const soap = require('soap');

const url  = `${process.env.URL_SOAP_WEBSERVER}`;

const getResultsAllGames = (req = request, res = response ) => {

    //Se obtiene el body para luego consultar en los soaps
    let { iGroupId, iLevel } = req.body;

    let args = {iGroupId: iGroupId, iLevel: iLevel }

    try {

        soap.createClient(url, function(err, client) {

            if (client) {
                //al tener la url del soaps se consulta directo a la función enviado los argumentos
                client.ResultsAllGames(args, function (error, data) {
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
    
}

module.exports = {
    getResultsAllGames

}
