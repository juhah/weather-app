import React from 'react'
import { connect } from 'react-redux'

import { fetchWeatherIfNeeded } from '../../../modules/weather'
import City from '../components/City'
import CityLoader from '../components/CityLoader'

class CityContainer extends React.Component {
  componentDidMount() {
    const { cityId, dispatch } = this.props

    dispatch(fetchWeatherIfNeeded(cityId))
  }

  render() {
    const { city } = this.props

    if(city) {
      const { icon, maxTemp } = city.weather[0]

      return <City name={city.name} time={city.updated} icon={icon} temperature={maxTemp} />
    }

    return <CityLoader />
  }
}

const mapStateToProps = (state, ownProps) => {
  const { entities } = state.weather
  const { cityId }   = ownProps

  return {
    city : entities.has(cityId) ? entities.get(cityId) : null
  }
}

export default connect(mapStateToProps)(CityContainer)
