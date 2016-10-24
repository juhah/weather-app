import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export default ({ values, onSelect }) => (
  <Nav bsStyle="pills" stacked activeKey={1} onSelect={onSelect}>
    {Object.keys(values).map(key => <NavItem eventKey={key} key={key} title={values[key]}>{values[key]}</NavItem>)}
  </Nav>
)
