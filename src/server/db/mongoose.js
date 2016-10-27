const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://127.0.0.1:27017/weather');

var WeatherSchema = new Schema({
    weekday : String,
    icon    : String,
    maxTemp : Number,
    minTemp : Number,
    dayTemp   : Number,
    nightTemp : Number,
    eveTemp   : Number,
    mornTemp  : Number,
    pressure  : Number,
    humidity  : Number,
    title       : String,
    description : String,
    windSpeed   : Number,
    windDirection : Number,
    clouds : Number,
    snow   : Number
}, { _id: false });

var CitySchema = new Schema({
    cityId  : String,
    name    : String,
    country : String,
    coord : {
      lon : Number,
      lat : Number
    },
    updated : Date,
    weather : [WeatherSchema]
});

CitySchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;

        ret.updated = ret.updated && ret.updated.getTime() || null;
    }
});

connection.model('City', CitySchema, 'cities');

module.exports = connection
