import React from 'react'
import { Media } from 'react-bootstrap'

export default ({ title }) => (
  <Media>
   <Media.Left>
      <img width={64} height={64} src="http://openweathermap.org/img/w/10d.png" alt="Image"/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>Loading...</Media.Heading>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </Media.Body>
    <Media.Right>
       X
    </Media.Right>
  </Media>
)
