import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import { fetchWeatherIfNeeded } from 'modules/weather'
import CityContainer from '../../../containers/CityContainer'
import { icon } from 'helpers/icons'
import { weekday } from 'helpers/date'
import WeatherIcon from 'components/WeatherIcon'

class ViewCityContainer extends React.Component {
  getForecast() {
    if(!this.props.city) {
      return
    }

    let rows = []

    const { weather } = this.props.city

    for(let w of weather) {
      const row = (
        <tr key={w.weekday}>
          <td>{weekday(w.weekday)}</td>
          <td>
            <WeatherIcon name={icon(w.icon)} />
            {" "}
            <span className="high">{w.maxTemp}&deg;C</span>
            {" / "}
            <span className="low">{w.minTemp}&deg;C</span>
          </td>
        </tr>
      )

      rows.push(row)
    }

    return (
      <Table>
        <tbody>
          {rows}
        </tbody>
      </Table>
    )
  }

  render() {
    const { cityId } = this.props

    return (
      <div>
        <CityContainer cityId={cityId} />
        <br />
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
