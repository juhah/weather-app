import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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

      const title = <Link to={`/cities/${city.id}`}>{city.name}</Link>

      return <City name={title} time={city.updated} icon={icon} temperature={maxTemp} />
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
