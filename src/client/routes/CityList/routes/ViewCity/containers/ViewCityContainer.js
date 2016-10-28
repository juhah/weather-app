import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { fetchWeatherIfNeeded } from 'modules/weather'
import CityContainer from '../../../containers/CityContainer'
import ForecastItem from '../components/ForecastItem'
import { icon } from 'helpers/icons'

class ViewCityContainer extends React.Component {
  getForecast() {
    if(!this.props.city) {
      return
    }

    let rows = []

    const { weather } = this.props.city

    for(let w of weather) {
      const dateObj = moment(w.date),
        weekday = dateObj.format('dddd'),
        dateStr = dateObj.format('D.M.Y');

      rows.push(
        <ForecastItem
          key={dateStr}
          title={weekday}
          byLine={dateStr}
          icon={icon(w.icon)}
          high={w.maxTemp}
          low={w.minTemp}
          humidity={w.humidity}
          pressure={w.pressure}
          windSpeed={w.windSpeed}
          windDirection={w.windDirection}
          />
      )
    }

    return (
      <div style={{'marginTop' : '40px', 'marginBottom' : '20px'}}>
        {rows}
      </div>
    )
  }

  render() {
    const { cityId } = this.props

    return (
      <div>
        <CityContainer cityId={cityId} />
        {::this.getForecast()}
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { entities } = state.weather
  const { city } = ownProps.params

  return {
    cityId : city,
    city : entities && entities.has(city) ? entities.get(city) : null
  }
}

export default connect(mapStateToProps)(ViewCityContainer)
