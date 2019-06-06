import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NewsItem = ({
  i,
  id,
  title,
  points,
  user,
  time_ago,
  comments_count,
  url,
  isFullInfo
}) => (
  <NewsItemWrapper>
    <Index>{i && <span>{i}. </span>}</Index>
    <div>
      <a href={url}>{title}</a>
      <Info>
        {points} points by <Link to={`/user?id=${user}`}>{user}</Link>{' '}
        {time_ago}{' '}
        {!isFullInfo && (
          <span>
            | <Link to={`/item/${id}`}>{comments_count} comments</Link>
          </span>
        )}
      </Info>
    </div>
  </NewsItemWrapper>
)

const NewsItemWrapper = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 5px 0 5px;
`

const Index = styled.div`
  width: 40px;
  font-size: 20px;
`

const Info = styled.div`
  font-size: 12px;
`
