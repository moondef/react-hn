import React from 'react'
import styled from 'styled-components'

import { Navigation, Container, ReactLogo } from '../'

export const Header = () => (
  <HeaderContainer>
    <ReactLogo />
    <Navigation />
  </HeaderContainer>
)

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
`
