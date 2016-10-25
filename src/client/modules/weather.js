import weatherApi from '../services/weatherApi'

export const ADD_CITY        = 'ADD_CITY'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function addCity(cityId) {
  return {
    type: ADD_CITY,
    cityId
  }
}

function shouldFetchWeather(cityId, state) {
  const { entities } = state.weather

  return !entities.has(cityId)
}

export function fetchWeatherIfNeeded(cityId) {
  return (dispatch, getState) => {
    if(shouldFetchWeather(cityId, getState())) {
      dispatch(fetchWeather(cityId))
    }
  }
}

function fetchWeather(cityId) {
  return (dispatch) => {
    dispatch(requestWeather(cityId))

    weatherApi.getWeather(cityId, (data) => {
      dispatch(receiveWeather(cityId, data.city))
    })
  }
}

export function requestWeather(cityId) {
  return {
    type : REQUEST_WEATHER,
    cityId
  }
}

export function receiveWeather(cityId, data) {
  return {
    type : RECEIVE_WEATHER,
    cityId,
    data
  }
}

const ACTION_HANDLERS = {
  [REQUEST_WEATHER] : (state, action) => {
    let newState = state

    newState.entities.delete(action.cityId)

    return newState
  },

  [RECEIVE_WEATHER]: (state, action) => {
    return {
      ...state,
      entities : state.entities.set(action.cityId, action.data)
    }
  },

  [ADD_CITY] : (state, action) => {
    return {
      ...state,
      cities : state.cities.add(action.cityId)
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cities   : new Set(['580f02d501dce0b5980720cb']),
  entities : new Map()
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
