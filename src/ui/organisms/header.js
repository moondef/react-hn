import React from 'react'
import styled from 'styled-components'

import { Navigation, Container, ReactLogo } from '../'

export const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <ReactLogo />
      <Navigation />
    </HeaderContainer>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
`

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #ffffff;
`
