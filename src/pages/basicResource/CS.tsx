import DetailList, { DetailListProps } from 'components/CategoryPage/DetailList'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { BASIC_RESOURCE_CATEGORIES } from '../../constants/CategoryName'
import { graphql } from 'gatsby'
import { ThemeContextProvider } from 'hooks/useTheme'
import { parse } from 'query-string'
import React, { useMemo } from 'react'
import { PageDataProps } from 'types/PostItem.types'

const CS: React.FC<PageDataProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: { [key: string]: string | string[] | null } = parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'CS'
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

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스 / 컴퓨터구조" />
        <DetailList
          detailCategoryList={detailcategoryList}
          selectedDetailCategory={selectedCategory}
          basePath={'basicResource'}
        />
        <DetailPostList selectedCategory={selectedCategory} posts={edges} />
      </ThemeContextProvider>
    </>
  )
}

export default CS

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
