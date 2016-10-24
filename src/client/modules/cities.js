import { normalize, Schema, arrayOf } from 'normalizr'

import weatherApi from '../services/weatherApi'

export const RESET_CITIES   = 'RESET_CITIES'
export const REQUEST_CITIES = 'REQUEST_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'

export function fetchCities(search) {
  return (dispatch, getState) => {
    if(shouldRequestCities(search, getState())) {
      dispatch(doRequestCities(search))
    }
  }
}

function shouldRequestCities(search, state) {
  return search.length >= 3;
}

function doRequestCities(search) {
  return (dispatch) => {
    dispatch(requestCities(search))

    weatherApi.searchCities(search, (cities) => {
      const citySchema = new Schema('cities')

      const { result, entities } = normalize(cities, arrayOf(citySchema))

      dispatch(receiveCities(result, entities))
    })
  }
}

export function resetCities() {
  return {
    type: RESET_CITIES
  }
}

export function requestCities(search) {
  return {
    type : REQUEST_CITIES,
    search
  }
}

export function receiveCities(result, entities) {
  return {
    type : RECEIVE_CITIES,
    result,
    entities
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_CITIES] : (state, action) => {
      return {
        ...state,
        result : []
      }
  },

  [REQUEST_CITIES] : (state, action) => {
    return {
      ...state,
      fetching : true,
      search   : action.search
    };
  },

  [RECEIVE_CITIES] : (state, action) => {
    return {
      ...state,
      fetching : false,
      result   : action.result,
      entities : action.entities
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  search : '',
  fetching : false,
  result : [],
  entities : {}
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
