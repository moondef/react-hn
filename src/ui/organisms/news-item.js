import React from 'react'
import { Link } from 'react-router-dom'

export const NewsItem = ({
  i,
  id,
  title,
  points,
  user,
  time_ago,
  comments_count,
  url
}) => (
  <div>
    <span>{i}. </span>
    <a href={url}>{title}</a>
    <p>
      {points} points by <Link to={`/user?id=${user}`}>{user}</Link> {time_ago}{' '}
      | <Link to={`/item?id=${id}`}>{comments_count} comments</Link>
    </p>
  </div>
)
