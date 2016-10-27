import React from 'react'

import 'weather-icons/css/weather-icons.css'

const WeatherIcon = ({ name, night }) => {
    let parts = []

    if(night) {
      parts.push('night')
    }

    parts.push(name)

    return (
      <i className={'wi wi-' + parts.join('-')}></i>
    )
}

WeatherIcon.propTypes = {
  name  : React.PropTypes.string.isRequired,
  night : React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.node
  ])
}

export default WeatherIcon
