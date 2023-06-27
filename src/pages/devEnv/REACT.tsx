import React from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import DetailList from 'components/CategoryPage/DetailList'
import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { DEV_ENV } from '../../constants/CategoryName'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import { POSTS_PER_PAGE } from '../../constants/PageEA'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import GlobalStyle from 'components/Common/GlobalStyle'
import { useLocation } from '@reach/router'
import { usePaginationFooter } from 'hooks/usePaginationFooter'

const REACT: React.FC<PageDataProps> = ({
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
      ? 'REACT'
      : parsed.category

  const categoriesName = DEV_ENV.map(category => category.value)
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
        <Title titleText="개발환경 / REACT" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'devEnv'}
          categoriesMap={DEV_ENV}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts}
        />
        <PaginationNFooter path={'/devEnv/REACT'} category={selectedCategory} />
      </ThemeContextProvider>
    </>
  )
}

export default REACT

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/devEnv/" } }
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
