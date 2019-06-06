import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, NewsItem, Container } from '../../ui'
import { rootURL } from '../../api'

export class ContentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
      lastItemID: 0,
      numPage: 1
    }
  }

  componentDidMount() {
    fetch(`${rootURL}/${this.props.page}?page=${this.state.numPage}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          content: data,
          lastItemID: data[data.length - 1].id
        })
      })
  }

  handlePagination = dir => {
    // // dir can be 'less' or 'more'
    if (dir === 'more') {
      fetch(`${rootURL}/${this.props.page}?page=${this.state.numPage + 1}`)
        .then(res => res.json())
        .then(data => {
          const dataLastItemID = data[data.length - 1].id
          if (this.state.lastItemID !== dataLastItemID) {
            this.setState(state => ({
              content: data,
              lastItemID: dataLastItemID,
              numPage: state.numPage + 1
            }))
          }
        })
    } else {
      if (this.state.numPage > 1) {
        fetch(`${rootURL}/${this.props.page}?page=${this.state.numPage + 1}`)
          .then(res => res.json())
          .then(data => {
            const dataLastItemID = data[data.length - 1].id
            this.setState(state => ({
              content: data,
              lastItemID: dataLastItemID,
              numPage: state.numPage - 1
            }))
          })
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <PageContainer>
          <div>
            {this.state.content.map(e => (
              <NewsItem
                {...e}
                key={e.id}
                i={
                  this.state.content.indexOf(e) +
                  (this.state.numPage - 1) * 30 +
                  1
                }
              />
            ))}
          </div>

          <div>
            <Link
              to={`?page=${this.state.numPage - 1}`}
              onClick={() => this.handlePagination('less')}
            >
              {'<'}
            </Link>
            <span>{this.state.numPage}</span>
            <Link
              to={`?page=${this.state.numPage + 1}`}
              onClick={() => this.handlePagination('more')}
            >
              {'>'}
            </Link>
          </div>
        </PageContainer>
      </div>
    )
  }
}

const PageContainer = styled(Container)`
  flex-direction: column;
  padding-top: 50px;
`
