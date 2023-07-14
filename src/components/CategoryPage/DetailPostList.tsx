import { FunctionComponent, useEffect, useMemo } from 'react'

import styled from '@emotion/styled'
import CreateIcon from '@mui/icons-material/Create'
import { PostListItemType, PostListProps } from 'types/PostItem.types'

import DetailPostItem from './DetailPostItem'

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
      {detailPostListData.length === 0 ? (
        <NoDataMessage>
          <CreateIcon />
          &nbsp; No Posts Available
        </NoDataMessage>
      ) : (
        detailPostListData.map(
          ({
            node: {
              id,
              frontmatter,
              fields: { slug },
            },
          }: PostListItemType) => (
            <DetailPostItem {...frontmatter} link={slug} key={id} />
          ),
        )
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
  transform: translateY(230px);

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin: 1px;
    grid-gap: 1px;
    transform: translateY(200px);
  }
`
const NoDataMessage = styled.div`
  margin: 100px;
  font-size: 25px;
  text-align: center;
  color: gray;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
