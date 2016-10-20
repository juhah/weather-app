const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var connection = mongoose.connect('mongodb://127.0.0.1:27017/weather');

var CitySchema = new Schema({
    cityId  : String,
    name    : String,
    country : String,
    coord : {
      lon : Number,
      lat : Number
    }
});

connection.model('City', CitySchema, 'cities');

module.exports = connection
