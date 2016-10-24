export const ADD_CITY        = 'ADD_CITY'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function addCity(cityId) {
  return {
    type: ADD_CITY,
    cityId
  }
}

const ACTION_HANDLERS = {
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
  cities   : new Set(['580884495778baa5013567a5'])
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
