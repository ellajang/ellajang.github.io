import React, { useState } from 'react'

import usePosts from 'hooks/usePosts'

const SearchPosts = () => {
  const posts = usePosts()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    console.log(setSearchTerm)
  }

  const filteredPosts = posts.filter(
    post =>
      post.title.includes(searchTerm) ||
      post.date.includes(searchTerm) ||
      post.excerpt.includes(searchTerm),
  )

  return (
    <div>
      <input type="text" onChange={handleSearch} />
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
