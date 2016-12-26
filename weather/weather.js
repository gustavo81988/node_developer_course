const  request = require('request');

let getWeather = (lat,lng,callback) => {
    request({
        url:`https://api.darksky.net/forecast/b0efcb4fbeb3f2696692bbdf6a2df57d/${lat},${lng}`,
        json: true
    },(error,response,body) =>{
        if(error){
            callback('Unable to conect to Forecast.io server');
        }else if(response.statusCode === 400){
            callback('Unable to fetch weather'); 
        }else if(response.statusCode === 200){
            callback(undefined,{
                temperature         : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature  
            });
        }
    });
};

module.exports.getWeather = getWeather;



