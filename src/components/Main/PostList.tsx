import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { PostListItemType, PostListProps } from 'types/PostItem.types'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import CustomSlider from './Slider'

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

  const sliderPosts = recentPosts.map(
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
        <CustomSlider posts={sliderPosts} />
      </PostListWrapper>
    </>
  )
}

export default PostList

const PostListWrapper = styled.div`
  height: 350px;
  margin: 60px 0 50px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
