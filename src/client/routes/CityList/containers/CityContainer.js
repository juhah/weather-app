import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchWeatherIfNeeded } from '../../../modules/weather'
import City from '../components/City'
import CityLoader from '../components/CityLoader'
import { icon } from 'helpers/icons'

class CityContainer extends React.Component {
  componentDidMount() {
    const { cityId, dispatch } = this.props

    dispatch(fetchWeatherIfNeeded(cityId))
  }

  render() {
    const { city, linkTitle } = this.props

    if(city) {
      const title = linkTitle ? <Link to={`/cities/${city.id}`}>{city.name}</Link> : city.name

      const days = city.weather.slice(0, 5).map((w, index) => ({
        date    : w.date,
        icon    : icon(w.icon),
        max     : w.maxTemp,
        min     : w.minTemp,
        description : w.description
      }))

      return <City name={title} time={city.updated} days={days} />
    }

    return <CityLoader />
  }
}

CityContainer.propTypes = {
  cityId    : React.PropTypes.string.isRequired,
  linkTitle : React.PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  const { entities } = state.weather
  const { cityId }   = ownProps

  return {
    city : entities && entities.has(cityId) ? entities.get(cityId) : null
  }
}

export default connect(mapStateToProps)(CityContainer)
