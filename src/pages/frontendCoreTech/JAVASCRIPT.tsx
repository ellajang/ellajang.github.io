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
import DetailPostList from 'components/CategoryPage/DetailPostList'

const JAVASCRIPT: React.FC<PageDataProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: { [key: string]: string | string[] | null } = parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'JAVASCRIPT'
      : parsed.category

  const categoriesName = FRONTEND_CORE_TECH.map(category => category.value)
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="프론트엔드 핵심 기술 / JAVASCRIPT" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'frontendCoreTech'}
          categoriesMap={FRONTEND_CORE_TECH}
        />
        <DetailPostList selectedCategory={selectedCategory} posts={edges} />
      </ThemeContextProvider>
    </>
  )
}
export default JAVASCRIPT

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/frontendCoreTech/" } }
    ) {
      edges {
        node {
          id
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
