import React from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import { FRONTEND_CORE_TECH } from '../../constants/CategoryName'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import { POSTS_PER_PAGE } from '../../constants/PageEA'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import { useLocation } from '@reach/router'
import GlobalStyle from 'components/Common/GlobalStyle'
import { usePaginationFooter } from 'hooks/usePaginationFooter'

const CSS: React.FC<PageDataProps> = ({
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
      ? 'CSS'
      : parsed.category

  const categoriesName = FRONTEND_CORE_TECH.map(category => category.value)
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
        <Title titleText="프론트엔드 핵심 기술 / CSS" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'frontendCoreTech'}
          categoriesMap={FRONTEND_CORE_TECH}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts}
        />
        <PaginationNFooter
          path={'/frontendCoreTech/CSS'}
          category={selectedCategory}
        />
      </ThemeContextProvider>
    </>
  )
}
export default CSS

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