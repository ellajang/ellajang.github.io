import React from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import DetailPostList from 'components/CategoryPage/DetailPostList'

const algorithm: React.FC<PageDataProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: { [key: string]: string | string[] | null } = parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const detailCategoryList = {
    All: edges.length,
  }
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="알고리즘" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'algorithm'}
          categoriesMap={[{ value: 'All', label: 'All' }]}
        />
        <DetailPostList selectedCategory={selectedCategory} posts={edges} />
      </ThemeContextProvider>
    </>
  )
}
export default algorithm

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/algorithm/" } }
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
