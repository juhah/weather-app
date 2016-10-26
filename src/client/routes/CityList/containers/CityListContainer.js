import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CityContainer from './CityContainer'

import 'weather-icons/css/weather-icons.css'

function getCities(cities) {
  let list = []

  for(let cityId of cities) {
    list.push(
      <CityContainer key={cityId} cityId={cityId} />
    )
  }

  return list
}

const CityListContainer = ({ cities }) => (
  <div>
    <i className="wi wi-night-sleet"></i>
      {getCities(cities)}
  </div>
)

const mapDispatchToProps = (state) => {
  const { cities } = state.weather

  return {
    cities : cities
  }
}

export default connect(mapDispatchToProps)(CityListContainer)
