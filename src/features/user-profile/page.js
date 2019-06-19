import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Header, Container } from '../../ui'
import { rootURL } from '../../api'

export const UserProfile = ({
  match: {
    params: { id }
  }
}) => {
  const initData = {
    created: '10 years ago',
    karma: 1,
    about: ''
  }

  const [data, setData] = useState(initData)

  useEffect(() => {
    fetch(`${rootURL}/user/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [id])

  return (
    <div>
      <Helmet>
        <title>Profile: {id} | React HN</title>
      </Helmet>

      <Header />
      <PageContainer>
        <h2>{id}</h2>
        <p>Created {data.created}</p>
        <p>Karma: {data.karma}</p>
        <p>
          About: <About dangerouslySetInnerHTML={{ __html: data.about }} />
          {!data.about && <span>None</span>}
        </p>
      </PageContainer>
    </div>
  )
}

const PageContainer = styled(Container)`
  padding-top: 50px;
  flex-direction: column;
  font-size: 0.9rem;
`
const About = styled.span`
  word-break: break-word;

  code {
    white-space: normal;
  }
`
