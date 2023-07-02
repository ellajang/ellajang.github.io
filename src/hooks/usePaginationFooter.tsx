import styled from '@emotion/styled'
import { useLocation } from '@reach/router'
import Footer from 'components/Common/Footer'
import Pagination from 'components/Common/Pagination'
import { parse } from 'query-string'
import React, { useState, useMemo, useEffect } from 'react'
import { Post, PostListItemType } from 'types/PostItem.types'

export const usePaginationFooter = (
  items: PostListItemType[] | Post[],
  itemsPerPage: number,
) => {
  const location = useLocation()
  const parsed: { [key: string]: string | string[] | null } = parse(
    location.search,
  )

  const initialPage: number =
    typeof parsed.page === 'string' ? parseInt(parsed.page, 10) : 1

  const [currentPage, _setCurrentPage] = useState(initialPage)
  const maxPage = Math.ceil(items.length / itemsPerPage)

  useEffect(() => {
    _setCurrentPage(Math.max(1, Math.min(maxPage, initialPage)))
  }, [maxPage, location.search])

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }, [items, currentPage, itemsPerPage])

  const numPosts = currentItems.length

  const PaginationNFooter = ({
    path,
    category,
  }: {
    path: string
    category: string
  }) => (
    <>
      <PaginationContainer>
        <Pagination
          count={maxPage}
          defaultPage={initialPage}
          path={path}
          category={category}
          queryParams={{ page: String(currentPage) }}
        />
      </PaginationContainer>
      <FooterContainer numPosts={numPosts}>
        <Footer />
      </FooterContainer>
    </>
  )

  if (items.length === 0) {
    return {
      currentItems: [],
      setCurrentPage: _setCurrentPage,
      maxPage,
      PaginationNFooter,
      noData: true,
    }
  }

  return {
    currentItems,
    setCurrentPage: _setCurrentPage,
    maxPage,
    PaginationNFooter,
    noData: false,
  }
}

const FooterContainer = styled.footer<{ numPosts: number }>`
  transform: translateY(${({ numPosts }) => (numPosts > 1 ? '60%' : '338%')});
`

const PaginationContainer = styled.div`
  margin-top: 220px;
`
