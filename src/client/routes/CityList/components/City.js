import React from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

import WeatherIcon from 'components/WeatherIcon'

import './city.css'

function getDayColumns(days) {
  return days.map((weather) => getDayColumn(weather))
}

function getDayColumn({ date, icon, max}) {
  const dateObj = moment(date),
    weekday = dateObj.format('ddd'),
    dateStr = dateObj.format('YYYY-MM-DD');

  return (
    <Col xs={1} key={dateStr} className="other-day">
      <div className="other-day-title">{weekday}</div>
      <div className="other-day-icon"><WeatherIcon name={icon} /></div>
      <div className="other-day-temperature">
        <span className="degrees">{max}&deg; </span><span className="unit">C</span>
      </div>
    </Col>
  )
}

function getTitle(name, time) {
  return <Col xs={5} className="city-title">
    <div className="name">{name}</div>
    <div className="time">updated {moment(time).fromNow()}</div>
  </Col>
}

function getCurrentDay({ date, icon, max, min, description}, time) {
  return (
    <Col xs={3} className="current-day">
      <Row>
        <Col xs={4} className="current-day-icon"><WeatherIcon name={icon} /></Col>
        <Col xs={8}>
          <div className="current-day-temperature">
            <span className="high">
              <span className="degrees">{max}&deg; </span><span className="unit">C</span>
            </span>
            <span className="low"> / <span className="degrees">{min}&deg; </span><span className="unit">C</span></span>
          </div>
          <div className="current-day-weekday">{description}</div>
        </Col>
      </Row>
    </Col>
  )
}

export default ({ name, time, days }) => {
  const currentDay = days[0]
  const otherDays  = days.slice(1)

  return (
    <Row className="city-list-row">
      {getTitle(name, time)}
      {getCurrentDay(currentDay, time)}
      {getDayColumns(otherDays)}
    </Row>
  )
}
