import React from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import { BASIC_RESOURCE_CATEGORIES } from '../../constants/CategoryName'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps, PostListItemType } from 'types/PostItem.types'
import { POSTS_PER_PAGE } from '../../constants/PageEA'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { useLocation } from '@reach/router'
import { usePaginationFooter } from 'hooks/usePaginationFooter'
import GlobalStyle from 'components/Common/GlobalStyle'

const NETWORK: React.FC<PageDataProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const location = useLocation()
  const parsed: { [key: string]: string | string[] | null } = parse(
    location.search,
  )
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'NETWORK'
      : parsed.category

  const categoriesName = BASIC_RESOURCE_CATEGORIES.map(
    category => category.value,
  )
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })

  const filteredEdges = edges.filter(edge =>
    edge.node.frontmatter.categories.includes(selectedCategory),
  )

  const { currentItems: paginatedPosts, PaginationNFooter } =
    usePaginationFooter(filteredEdges, POSTS_PER_PAGE)

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
        <Title titleText="기초 및 학습 리소스 / 네트워크" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'basicResource'}
          categoriesMap={BASIC_RESOURCE_CATEGORIES}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts as PostListItemType[]}
        />
        <PaginationNFooter
          path={'/basicResource/NETWORK'}
          category={selectedCategory}
        />
      </ThemeContextProvider>
    </>
  )
}

export default NETWORK

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/basicResource/" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
