import React from 'react'
import styled from 'styled-components'

import { Header, Container } from '../../ui'

export const NotFoundPage = () => (
  <>
    <Header />
    <PageContainer>
      <h1>Not Found</h1>
      <h3>404</h3>
    </PageContainer>
  </>
)

const PageContainer = styled(Container)`
  padding-top: 50px;
  flex-direction: column;
`
