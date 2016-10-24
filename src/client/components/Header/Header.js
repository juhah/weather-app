import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <div>
    <h1>Weather App</h1>
    <IndexLink to='/' activeClassName='route--active'>
      List
    </IndexLink>
    {' · '}
    <Link to='/add' activeClassName='route--active'>
      new
    </Link>
  </div>
)

export default Header
