import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CityContainer from './CityContainer'

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
    <Link to='/add'>Add new city</Link>
    <div>
      {getCities(cities)}
    </div>
  </div>
)

const mapDispatchToProps = (state) => {
  const { cities } = state.weather

  return {
    cities : cities
  }
}

export default connect(mapDispatchToProps)(CityListContainer)
