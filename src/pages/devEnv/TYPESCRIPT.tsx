import React from 'react'
import { parse } from 'query-string'
import DetailList from 'components/CategoryPage/DetailList'
import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { DEV_ENV } from '../../constants/CategoryName'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import { graphql } from 'gatsby'

const TYPESCRIPT: React.FC<PageDataProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: { [key: string]: string | string[] | null } = parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'TYPESCRIPT'
      : parsed.category

  const categoriesName = DEV_ENV.map(category => category.value)
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="개발환경 / TYPESCRIPT" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'devEnv'}
          categoriesMap={DEV_ENV}
        />
        <DetailPostList selectedCategory={selectedCategory} posts={edges} />
      </ThemeContextProvider>
    </>
  )
}

export default TYPESCRIPT

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/devEnv/" } }
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
