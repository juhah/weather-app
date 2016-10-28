import React from 'react'
import { Row, Col } from 'react-bootstrap'
import WeatherIcon from 'components/WeatherIcon'
import FontAwesome from 'react-fontawesome'

import { cardinalDirection } from 'helpers/icons'
import './ForecastItem.css'

const ForecastColumn = (icon, value) => (
  <Col xs={1} className="forecast-column">
    <span className="icon">
      <WeatherIcon name={icon} />
    </span>
    <span className="text">
      {value}
    </span>
  </Col>
)

const ForecastItem = ({title, byLine, icon, high, low, humidity, pressure, windSpeed, windDirection}) => (
  <Row className="forecast">
    <Col xs={5}>
      <div className="title">{title}</div>
      <div className="byline">{byLine}</div>
    </Col>
    <Col xs={1} className="icon">
      <WeatherIcon name={icon} />
    </Col>
    <Col xs={3}>
      <span className="high-icon">
        <FontAwesome name="angle-up" />
      </span>
      {high}&deg;
      <span className="degree"> C</span>

      <br />
      <span className="low-icon">
        <FontAwesome name="angle-down" />
      </span>
      {low}&deg;
      <span className="degree"> C</span>
    </Col>
    {ForecastColumn('raindrop', humidity)}
    {ForecastColumn('barometer', pressure)}
    {ForecastColumn('wind wi-towards-' + cardinalDirection(windDirection), windSpeed)}
  </Row>
)

export default ForecastItem
