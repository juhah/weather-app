var express = require('express');
var router = express.Router();
var request = require('request');

var mongoose = require('../db/mongoose');

var City = mongoose.model('City');

var API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
var API_KEY = '65a146a95328ae916f46a845e06a5cfb';

function getApiUrl(cityId) {
  return API_URL + '/daily?id=' + cityId + '&cnt=10&appid=' + API_KEY;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function round(value, decimals = 1) {
  const x = Math.pow(10, decimals);
  return Math.round(x * value) / x;
}

router.get('/weather/:cityId', function(req, res, next) {
  var cityId = req.params.cityId || null

  City.findById(cityId, function(err, doc) {
    var updatedAt = doc.updated && doc.updated.getTime()

    if(!updatedAt || (Date.now() - updatedAt) > 600000) {
        request(getApiUrl(doc.cityId), function (error, response, body) {
            var forecast = []

            if (!error && response.statusCode == 200) {
                var json = JSON.parse(body);

                forecast = json.list.map((d) => ({
                    weekday   : (new Date(d.dt * 1000)).getDay(),
                    icon      : d.weather[0].icon,
                    maxTemp   : round(kelvinToCelsius(d.temp.max), 0),
                    minTemp   : round(kelvinToCelsius(d.temp.min), 0),
                    dayTemp   : round(kelvinToCelsius(d.temp.day), 0),
                    nightTemp : round(kelvinToCelsius(d.temp.night), 0),
                    eveTemp   : round(kelvinToCelsius(d.temp.eve), 0),
                    mornTemp  : round(kelvinToCelsius(d.temp.morn), 0),
                    pressure  : d.pressure,
                    humidity  : d.humidity,
                    title       : d.weather[0].main,
                    description : d.weather[0].description,
                    windSpeed   : d.speed,
                    windDirection : d.deg,
                    clouds : d.clouds,
                    snow   : d.snow
                  }));

                doc.weather = forecast;
                doc.updated = Date.now();

                doc.save();
            }

            res.json({
               data : {
                 city : doc
               }
            });
        })
    }
    else {
      res.json({
         data : {
           city : doc
         }
      });
    }
  })
});

module.exports = router;
