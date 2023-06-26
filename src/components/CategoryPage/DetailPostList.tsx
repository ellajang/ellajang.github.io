import styled from '@emotion/styled'
import { FunctionComponent, useEffect, useMemo } from 'react'
import DetailPostItem from './DetailPostItem'
import { PostListItemType, PostListProps } from 'types/PostItem.types'

const DetailPostList: FunctionComponent<PostListProps> = ({
  posts,
  selectedCategory,
}) => {
  const detailPostListData = useMemo(
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
    [posts, selectedCategory],
  )
  useEffect(() => {}, [detailPostListData])
  return (
    <DetailPostListWrapper>
      {detailPostListData.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }: PostListItemType) => (
          <DetailPostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </DetailPostListWrapper>
  )
}

export default DetailPostList

const DetailPostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  width: calc(100% - 70px);
  margin: 20px;
  padding: 40px;
  transform: translateY(270px);
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin: 20px;
    transform: translateY(200px);
  }
`
