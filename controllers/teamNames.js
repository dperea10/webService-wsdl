const { response } = require('express');

const fs   = require('fs');
const util = require('util');
const path = require('path');
const soap = require('soap');

const url  = `${process.env.URL_SOAP_WEBSERVER}`;
const xml  = fs.readFileSync( path.join(__dirname, '../services/soaps/getFootballPooll/soapTeamNames') + '/soapTeamNames.wsdl', 'utf8');

const getTeamNames = (req, res = response) => {

    try {

        soap.createClient(url, function(err, client) {

            if (client) {
                //como el soap no requiere args se envía el XML apra traer toda la data
                client.TeamNames(xml, function (error, data) {
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
    getTeamNames

}
