import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Comment = ({ level, user, time_ago, content, comments }) => (
  <div>
    <CommentWrapper level={level}>
      <p>
        <Link to={`/user/${user}`}>{user}</Link> {time_ago}
      </p>
      <CommentText dangerouslySetInnerHTML={{ __html: content }} />
    </CommentWrapper>

    {comments &&
      comments.map((e, i) => <Comment {...e} key={i} comments={e.comments} />)}
  </div>
)

const CommentWrapper = styled.div`
  font-size: 12px;
  padding-left: ${props => props.level * 15}px;
  padding-top: 7px;
  padding-bottom: 7px;
`

const CommentText = styled.p`
  word-break: break-all;
`
