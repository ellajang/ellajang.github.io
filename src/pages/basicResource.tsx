import DetailList, { DetailListProps } from 'components/CategoryPage/DetailList'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import Title from 'components/CategoryPage/Title'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Pagination from 'components/Common/Pagination'
import { BASIC_RESOURCE_CATEGORIES } from '../constants/CategoryName'
import { graphql } from 'gatsby'
import { ThemeContextProvider } from 'hooks/useTheme'
import { POSTS_PER_PAGE } from 'pages'
import { parse } from 'query-string'
import React, { useMemo } from 'react'
import { PageDataProps } from 'types/PostItem.types'

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

  const initialCategoryList: DetailListProps['detailCategoryList'] = {
    All: 0,
    ...BASIC_RESOURCE_CATEGORIES.reduce((list, category) => {
      list[category] = 0
      return list
    }, {} as DetailListProps['detailCategoryList']),
  }
  const detailcategoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: DetailListProps['detailCategoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (BASIC_RESOURCE_CATEGORIES.includes(category)) {
              if (list[category] === undefined) list[category] = 1
              else list[category]++
            }
          })
          list['All']++
          return list
        },
        initialCategoryList,
      ),
    [],
  )
  /*  const [page, setPage] = React.useState(1)
  const handlePageChange = (value: number) => {
    setPage(value)
  }
  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE
    return edges.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [edges, page]) */
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스" />
        <DetailList
          detailCategoryList={detailcategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'basicResource'}
        />
        <DetailPostList selectedCategory={selectedCategory} posts={edges} />
        {/* <Footer /> */}
        {/* <Pagination
          count={Math.ceil(edges.length / POSTS_PER_PAGE)}
          onChange={handlePageChange}
        /> */}
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
