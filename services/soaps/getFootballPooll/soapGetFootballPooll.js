const soap = require('soap');
const util = require('util');

const url = `${process.env.URL_SOAP_WEBSERVER}`;


/*----------  LOGIC TO CONSUME SOAP WEB SERVICE WITH PROMISE  ----------*/
const  soapGetFootballPooll = () => {

    try {
        soap.createClient(url, function(err, client) {
            if (client) {
                return client;
            }else {
                return err;
            } 
        });
    }catch (error) {
        console.log(error)
    }
} ;

module.exports = {
    soapGetFootballPooll
}