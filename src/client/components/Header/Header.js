import React from 'react'
import { IndexLink } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

export const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <IndexLink to="/">Weather</IndexLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={1} href="#">Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/add">
        <NavItem eventKey={2} href="#">Add</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default Header
