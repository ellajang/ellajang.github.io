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
      <IconWrapper>📌&nbsp;최근 게시물</IconWrapper>
      <PostListWrapper>
        <CustomSliderWrapper>
          <CustomSlider posts={swiperPosts} />
        </CustomSliderWrapper>
      </PostListWrapper>
    </>
  )
}

export default PostList

const PostListWrapper = styled.div`
  margin: auto 160px;
  padding-right: 60px;
  position: relative;
  @media (max-width: 1300px) {
    width: 100%;
    margin: 0px 10px 10px 80px;
    padding-right: 200px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
    padding-right: 100px;
  }
`

const CustomSliderWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin: auto 25px;
  }

  @media (min-width: 1300px) {
    width: 100%;
  }
`

const IconWrapper = styled.h3(() => {
  const theme = useContext(ThemeContext)
  return {
    margin: '50px 0px 0px 220px',
    display: 'flex',
    alignItems: 'center',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
    '@media (max-width: 768px)': {
      margin: '10px 0px 10px 50px',
    },
    '@media (max-width: 1300px)': {
      margin: '20px 0px 10px 80px',
    },
  }
})
