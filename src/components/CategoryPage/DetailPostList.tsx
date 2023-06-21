import styled from '@emotion/styled'
import { FunctionComponent, useMemo } from 'react'
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
    [selectedCategory],
  )
  return (
    <DetailPostListWrapper>
      {detailPostListData.map(
        ({ node: { id, frontmatter } }: PostListItemType) => (
          <DetailPostItem
            {...frontmatter}
            link="https://www.google.co.kr/"
            key={id}
          />
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
  width: calc(100% - 80px);
  margin: 10px;
  padding: 30px;
  transform: translateY(270px);
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin: 10px;
    transform: translateY(200px);
  }
`
