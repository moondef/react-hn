import React, { Component } from 'react'
import styled from 'styled-components'

import { rootURL } from '../../api'
import { Header, Container, NewsItem, Comment } from '../../ui'

export class ContentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      points: 0,
      user: 'username',
      time_ago: '1 second ago',
      url: '',
      comments: []
    }
  }

  componentDidMount() {
    fetch(`${rootURL}/item/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          points: data.points,
          user: data.user,
          time_ago: data.time_ago,
          url: data.url,
          comments: data.comments
        })
      )
  }

  render() {
    return (
      <div>
        <Header />
        <PageContainer>
          <NewsItem isFullInfo {...this.state} />
          <Comments>
            Comments:
            {this.state.comments.map((e, i) => (
              <Comment {...e} comments={e.comments} key={i} />
            ))}
          </Comments>
        </PageContainer>
      </div>
    )
  }
}

const PageContainer = styled(Container)`
  padding-top: 50px;
  flex-direction: column;
`

const Comments = styled.div``
