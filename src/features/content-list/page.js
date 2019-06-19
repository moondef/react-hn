import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Header, NewsItem, Container } from '../../ui'
import { rootURL } from '../../api'

export const ContentList = ({ page }) => {
  const initPage =
    Number(new URL(window.location.href).searchParams.get('page')) || 1
  const [content, setContent] = useState([])
  const [lastItemID, setLastItemID] = useState(0)
  const [numPage, setNumPage] = useState(initPage || 1)

  useEffect(() => {
    fetch(`${rootURL}/${page}?page=${numPage}`)
      .then(res => res.json())
      .then(data => {
        if (data.length) {
          setContent(data)
          setLastItemID(data[data.length - 1].id)
        }
      })
  }, [page, numPage])

  const handlePagination = dir => {
    // // dir can be 'less' or 'more'
    if (dir === 'next') {
      fetch(`${rootURL}/${page}?page=${numPage + 1}`)
        .then(res => res.json())
        .then(data => {
          const dataLastItem = data[data.length - 1]
          if (dataLastItem) {
            if (lastItemID !== dataLastItem.id) {
              setContent(data)
              setLastItemID(dataLastItem.id)
              setNumPage(numPage + 1)
            }
          }
        })
    } else {
      if (numPage > 1) {
        fetch(`${rootURL}/${page}?page=${numPage - 1}`)
          .then(res => res.json())
          .then(data => {
            const dataLastItemID = data[data.length - 1].id

            setContent(data)
            setLastItemID(dataLastItemID)
            setNumPage(numPage - 1)
          })
      }
    }
  }

  return (
    <div>
      <Header />
      <PageContainer>
        <div>
          {content.map(e => (
            <NewsItem
              {...e}
              key={e.id}
              i={content.indexOf(e) + (numPage - 1) * 30 + 1}
            />
          ))}
        </div>

        <div>
          <Link
            to={`?page=${numPage}`}
            onClick={() => handlePagination('prev')}
          >
            {'<'}
          </Link>
          <span>{numPage}</span>
          <Link
            to={`?page=${numPage + 1}`}
            onClick={() => handlePagination('next')}
          >
            {'>'}
          </Link>
        </div>
      </PageContainer>
    </div>
  )
}

const PageContainer = styled(Container)`
  flex-direction: column;
  padding-top: 50px;
`
