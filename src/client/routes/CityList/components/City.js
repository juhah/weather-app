import React from 'react'
import { Media } from 'react-bootstrap'
import moment from 'moment'

import WeatherIcon from 'components/WeatherIcon'
import { icon } from 'helpers/icons'

export default ({ name, time, icon : iconName, temperature }) => (
  <Media>
    <Media.Body>
      <Media.Heading>{name}</Media.Heading>
      <p>Last updated {moment(time).fromNow()}.</p>
    </Media.Body>
    <Media.Right style={{'fontSize' : '26px'}}>
      <WeatherIcon name={icon(iconName)} />
    </Media.Right>
    <Media.Right>
      {temperature} &deg;C
    </Media.Right>
  </Media>
)
