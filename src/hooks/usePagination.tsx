import { useState, useMemo, useEffect } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export const usePagination = (
  items: PostListItemType[],
  itemsPerPage: number,
) => {
  const [currentPage, _setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const setCurrentPage = (page: number) => {
    if (page <= maxPage && page > 0) {
      _setCurrentPage(page)
    }
  }

  useEffect(() => {
    setMaxPage(Math.ceil(items.length / itemsPerPage))
  }, [items, itemsPerPage])

  useEffect(() => {
    if (currentPage > maxPage) {
      setCurrentPage(maxPage)
    }
  }, [maxPage])

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return items.slice(startIndex, startIndex + itemsPerPage)
  }, [items, currentPage, itemsPerPage])

  return { currentItems, setCurrentPage, maxPage }
}
