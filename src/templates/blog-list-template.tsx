import React from 'react'
import styled from 'styled-components'

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 20px 0;

  h2 {
    margin: 0;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    color: gray;
  }
`

const BlogListTemplate = () => {
  const posts = [
    {
      title: '첫 번째 포스트',
      summary: '첫 번째 포스트에 대한 요약...',
      thumbnail: 'https://placekitten.com/200/200',
      date: '2023-06-17',
    },
    {
      title: '두 번째 포스트',
      summary: '두 번째 포스트에 대한 요약...',
      thumbnail: 'https://placekitten.com/200/200',
      date: '2023-06-18',
    },
    // 추가로 다른 포스트들...
  ]

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <p>{post.date}</p>
          </div>
          <img src={post.thumbnail} alt={post.title} />
        </Post>
      ))}
    </div>
  )
}

export default BlogListTemplate
