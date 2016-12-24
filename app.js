const request = require('request');

request( {
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCxKCa8d27gDfpLPO8pjjKmyzj9xLX1WTc',
    json: true
},(error, response, body)=> {
    console.log(body);
})