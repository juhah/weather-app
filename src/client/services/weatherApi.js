import request from 'superagent'

const API_URL = 'http://127.0.0.1:3000/api'

var onGoingRequest = null;

export const searchCities = (search, callback) => {
  if(onGoingRequest) {
    onGoingRequest.abort()
  }

  onGoingRequest = request.get(API_URL + '/cities')
    .query({q: search})
    .end((err, res) => {
      callback(res.body.data)
    })
}

export const getWeather = (cityId, callback) => {
  request.get(API_URL + `/weather/${cityId}`)
    .end((err, res) => {
      callback(res.body.data)
    })
}

const weatherApi = {
  searchCities,
  getWeather
}

export default weatherApi
