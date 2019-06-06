import React from 'react'
import styled from 'styled-components'

import { NavigationLink } from '../'

export const Navigation = () => (
  <>
    <Wrapper>
      {/* top, new, show, ask, jobs */}
      <NavigationLink exact to="/top">
        top
      </NavigationLink>
      <NavigationLink to="/newest">new</NavigationLink>
      <NavigationLink to="/show">show</NavigationLink>
      <NavigationLink to="/ask">ask</NavigationLink>
      <NavigationLink to="/jobs">jobs</NavigationLink>
    </Wrapper>
    <NavigationLink to="/about">about</NavigationLink>
  </>
)

const Wrapper = styled.nav`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  padding-left: 10px;

  @media screen and (max-width: 740px) {
    max-width: 300px;
  }
`
