import React, { useEffect, useState } from 'react'

import usePosts from 'hooks/usePosts'
import { useLocation } from '@reach/router'

const SearchPosts = () => {
  const posts = usePosts()
  const { search } = useLocation()
  const urlSearchTerm = new URLSearchParams(search).get('term') || ''
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setSearchTerm(urlSearchTerm)
  }, [urlSearchTerm])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
  }

  const filteredPosts = posts.filter(
    post =>
      post.title.includes(searchTerm) ||
      post.date.includes(searchTerm) ||
      post.excerpt.includes(searchTerm),
  )

  return (
    <div>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      {filteredPosts.map(post => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchPosts
