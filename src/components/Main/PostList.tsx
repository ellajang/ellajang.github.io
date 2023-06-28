import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { PostListItemType, PostListProps } from 'types/PostItem.types'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import CustomSlider from './Swiper'

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
        <DriveFileRenameOutlineIcon />
        최근 게시물
        <CustomSlider posts={swiperPosts} />
      </PostListWrapper>
    </>
  )
}

export default PostList

const PostListWrapper = styled.div`
  height: 350px;
  margin: 50px 310px 10px 255px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
