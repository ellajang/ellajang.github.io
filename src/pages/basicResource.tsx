import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import DetailList from 'components/CategoryPage/DetailList'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { BASIC_RESOURCE_CATEGORIES } from '../constants/CategoryName'
import Footer from 'components/Common/Footer'
import Pagination from 'components/Common/Pagination'
import { POSTS_PER_PAGE } from '../constants/PageEA'

const basicResource: React.FC<PageDataProps> = ({
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

  const categoriesName = BASIC_RESOURCE_CATEGORIES.map(
    category => category.value,
  )
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })
  const [page, setPage] = React.useState(1)
  const handlePageChange = (value: number) => {
    setPage(value)
  }
  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE
    return edges.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [edges, page])

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스" />
        <DetailList
          detailCategoryList={detailCategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'basicResource'}
          categoriesMap={BASIC_RESOURCE_CATEGORIES}
        />
        <DetailPostList
          selectedCategory={selectedCategory}
          posts={paginatedPosts}
        />

        <Pagination
          count={Math.ceil(edges.length / POSTS_PER_PAGE)}
          onChange={handlePageChange}
        />
        <Footer />
      </ThemeContextProvider>
    </>
  )
}

export default basicResource

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/basicResource/" } }
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
