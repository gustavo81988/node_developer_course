/*const yargs   = require('yargs');
const geocode = require('./geocode/geocode'); 

const argv    = yargs
    .options({
        a:{
            demand   : true,
            alias    : 'address',
            describe : 'Address to fetch weather for',
            string   : true    
        }    
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);    
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

*/

const  request = require('request');

request({
    url:'https://api.darksky.net/forecast/b0efcb4fbeb3f2696692bbdf6a2df57d/37.8267,-122.4233',
    json: true
},(error,response,body) =>{
    if(error){
        console.log('Unable to conect to Forecast.io server');
    }else if(response.statusCode === 400){
        console.log('Unable to fetch weather'); 
    }else if(response.statusCode === 200){
        console.log(body.currently.temperature); 
    }
});