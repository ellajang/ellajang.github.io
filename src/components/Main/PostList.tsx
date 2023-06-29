import React, { useContext, useMemo } from 'react'
import styled from '@emotion/styled'
import { PostListItemType, PostListProps } from 'types/PostItem.types'
import CustomSlider from './Swiper'
import { ThemeContext } from 'hooks/useTheme'

const PostList: React.FC<PostListProps> = ({ selectedCategory, posts }) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  const sortedPosts = postListData.sort(
    (a, b) =>
      new Date(b.node.frontmatter.date).getTime() -
      new Date(a.node.frontmatter.date).getTime(),
  )

  const recentPosts = sortedPosts.slice(0, 6)

  const swiperPosts = recentPosts.map(
    ({
      node: {
        fields: { slug },
        frontmatter,
      },
    }: PostListItemType) => ({
      ...frontmatter,
      description: frontmatter.summary,
      url: slug,
    }),
  )

  return (
    <>
      <PostListWrapper>
        <IconWrapper>📌&nbsp;최근 게시물</IconWrapper>
        <CustomSlider posts={swiperPosts} />
      </PostListWrapper>
    </>
  )
}

export default PostList

const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding-right: 220px;
    margin: 10px 0 50px 0px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding-right: 400px;
    margin: 50px 0px 0px 0px;
  }
`
const IconWrapper = styled.div(() => {
  const theme = useContext(ThemeContext)
  return {
    margin: '0px 0px 0px 240px',
    display: 'flex',
    alignItems: 'center',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
    '@media (max-width: 768px)': {
      margin: '20px 0px 0px 120px',
    },
  }
})
