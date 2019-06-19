import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { rootURL } from '../../api'
import { Header, Container, NewsItem, Comment } from '../../ui'

export const ContentItem = ({
  match: {
    params: { id }
  }
}) => {
  const initData = {
    title: '',
    points: 0,
    user: 'username',
    time_ago: '1 second ago',
    url: '',
    comments: []
  }

  const [data, setData] = useState(initData)

  useEffect(() => {
    fetch(`${rootURL}/item/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [id])

  return (
    <div>
      <Helmet>
        <title>{data.title} | React HN</title>
      </Helmet>
      <Header />
      <PageContainer>
        <NewsItem isFullInfo {...data} />
        <Comments>
          Comments:
          {data.comments.map((e, i) => (
            <Comment {...e} comments={e.comments} key={i} />
          ))}
        </Comments>
      </PageContainer>
    </div>
  )
}

const PageContainer = styled(Container)`
  padding-top: 50px;
  flex-direction: column;
`

const Comments = styled.div``
