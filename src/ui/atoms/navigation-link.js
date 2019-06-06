import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationLink = props => (
  <NavLinkWrapper {...props} activeClassName="active" />
)

const NavLinkWrapper = styled(NavLink)`
  font-size: 14px;
  color: #000;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid #00dcff;
    /* color: red; */
  }
`
