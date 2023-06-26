import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import Title from 'components/CategoryPage/Title'
import DetailList from 'components/CategoryPage/DetailList'
import DetailPostList from 'components/CategoryPage/DetailPostList'
import { BASIC_RESOURCE_CATEGORIES } from '../../constants/CategoryName'
import { ThemeContextProvider } from 'hooks/useTheme'
import { PageDataProps } from 'types/PostItem.types'
import { POSTS_PER_PAGE } from '../../constants/PageEA'
import useDetailCategoryList from 'hooks/useDetailCategoryList'
import { useLocation } from '@reach/router'
import styled from '@emotion/styled'
import Pagination from 'components/Common/Pagination'
import { usePagination } from 'hooks/usePagination'
import Footer from 'components/Common/Footer'

const DS: React.FC<PageDataProps> = ({
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
      ? 'DS'
      : parsed.category

  const categoriesName = BASIC_RESOURCE_CATEGORIES.map(
    category => category.value,
  )
  const detailCategoryList = useDetailCategoryList({
    edges,
    categoriesName,
  })
  const initialPage: number =
    typeof parsed.page === 'string' ? parseInt(parsed.page, 10) : 1

  const {
    currentItems: paginatedPosts,
    setCurrentPage,
    maxPage,
  } = usePagination(edges, POSTS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(initialPage)
  }, [location.search])
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스 / 자료구조" />
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
        <PaginationContainer>
          <Pagination
            count={maxPage}
            onChange={setCurrentPage}
            defaultPage={initialPage}
            path={'/basicResource/DS'}
            category={selectedCategory}
          />
        </PaginationContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </ThemeContextProvider>
    </>
  )
}

export default DS

export const getDetailPostList = graphql`
  query getDetailPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { fileAbsolutePath: { regex: "/contents/basicResource/" } }
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
const FooterContainer = styled.footer`
  transform: translateY(280%);
`
const PaginationContainer = styled.div`
  margin-top: 280px;
`
