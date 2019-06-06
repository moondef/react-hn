import React, { useState, useEffect } from 'react'

import { Header, NewsItem } from '../../ui'
import { rootURL } from '../../api'

export const ContentList = ({ page }) => {
  const [content, setContent] = useState([])
  const [numPage, setNumPage] = useState(1)

  useEffect(() => {
    fetch(`${rootURL}/${page}?page=${numPage}`)
      .then(res => res.json())
      .then(data => setContent(data))
  })

  return (
    <div>
      <Header />
      <div>
        <div>
          {content.map((e, i) => (
            <NewsItem {...e} />
          ))}
        </div>

        <div>{/* There will be pagination */}</div>
      </div>
    </div>
  )
}
