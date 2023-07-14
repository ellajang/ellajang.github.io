import React from 'react'

import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps, PostListItemType } from 'types/PostItem.types'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import GlobalStyle from 'components/Common/GlobalStyle'
import { useLocation } from '@reach/router'
import { usePaginationFooter } from 'hooks/usePaginationFooter'

import { POSTS_PER_PAGE } from '../constants/PageEA'
import { FRONTEND_CORE_TECH } from '../constants/CategoryName'

const frontendCoreTech: React.FC<PageDataProps> = ({
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

  const categoriesName = FRONTEND_CORE_TECH.map(category => category.value)
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })

  const { currentItems: paginatedPosts, PaginationNFooter } =
    usePaginationFooter(edges, POSTS_PER_PAGE)

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
        <Title titleText="프론트엔드 핵심 기술" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'frontendCoreTech'}
          categoriesMap={FRONTEND_CORE_TECH}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts as PostListItemType[]}
        />
        <PaginationNFooter
          path={'/frontendCoreTech/'}
          category={selectedCategory}
        />
      </ThemeContextProvider>
    </>
  )
}
export default frontendCoreTech

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/frontendCoreTech/" } }
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
