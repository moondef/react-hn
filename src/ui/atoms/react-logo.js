import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from './react-512.png'

export const ReactLogo = () => (
  <Link to="/">
    <LogoWrapper src={logo} alt="logo" />
  </Link>
)

const LogoWrapper = styled.img`
  width: 32px;
  height: 32px;
`
