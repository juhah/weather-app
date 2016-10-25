import React from 'react'
import { Media } from 'react-bootstrap'
import moment from 'moment'

export default ({ name, time, icon, temperature }) => (
  <Media>
    <Media.Body>
      <Media.Heading>{name}</Media.Heading>
      <p>Last updated {moment(time).fromNow()}.</p>
    </Media.Body>
    <Media.Right>
      <img width={64} height={64} src={`http://openweathermap.org/img/w/${icon}.png`} alt="Image"/>
    </Media.Right>
    <Media.Right>
      {temperature} &deg;C
    </Media.Right>
  </Media>
)
