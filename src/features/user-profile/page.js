import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Header, Container } from '../../ui'
import { rootURL } from '../../api'

export class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      created: '10 years ago',
      karma: 1,
      about: ''
    }
  }

  componentDidMount() {
    fetch(`${rootURL}/user/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          created: data.created,
          karma: data.karma,
          about: data.about
        })
      )
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile: {this.props.match.params.id} | React HN</title>
        </Helmet>

        <Header />
        <PageContainer>
          <h2>{this.props.match.params.id}</h2>
          <p>Created {this.state.created}</p>
          <p>Karma: {this.state.karma}</p>
          <p>
            About:{' '}
            <About dangerouslySetInnerHTML={{ __html: this.state.about }} />
            {!this.state.about && <span>None</span>}
          </p>
        </PageContainer>
      </div>
    )
  }
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
