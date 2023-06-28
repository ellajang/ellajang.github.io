import React from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import { POSTS_PER_PAGE } from '../constants/PageEA'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import { useLocation } from '@reach/router'
import { usePaginationFooter } from 'hooks/usePaginationFooter'
import GlobalStyle from 'components/Common/GlobalStyle'

const debugging: React.FC<PageDataProps> = ({
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
      ? 'All'
      : parsed.category

  const detailCategoryList = {
    All: edges.length,
  }
  const { currentItems: paginatedPosts, PaginationNFooter } =
    usePaginationFooter(edges, POSTS_PER_PAGE)

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
        <Title titleText="디버깅 및 이슈 해결" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'debugging'}
          categoriesMap={[{ value: 'All', label: 'All' }]}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts}
        />
        <PaginationNFooter path={'/debugging/'} category={selectedCategory} />
      </ThemeContextProvider>
    </>
  )
}
export default debugging

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/debugging/" } }
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