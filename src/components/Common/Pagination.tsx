import styled from '@emotion/styled'
import { Pagination as MUIPagination } from '@mui/material'
import { navigate } from 'gatsby'
import { ThemeContext } from 'hooks/useTheme'
import React, { ChangeEvent, useContext, useState } from 'react'

type PaginationProps = {
  count: number
  defaultPage?: number
  path: string
  term?: string
  category?: string
  showFirstButton?: boolean
  showLastButton?: boolean
  onChange?: (page: number) => void
  queryParams: { [key: string]: any }
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  defaultPage = 1,
  path,
  queryParams,
}) => {
  const [page, setPage] = useState(Math.max(1, Math.min(count, defaultPage)))

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    const validPage = Math.max(1, Math.min(count, value))
    setPage(validPage)

    const searchParams = new URLSearchParams({
      ...queryParams,
      page: String(validPage),
    })

    navigate(`${path}?${searchParams.toString()}`, {
      replace: true,
    })
  }
  return (
    <>
      <PaginationWrapper>
        <CustomMUIPagination
          count={count}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </PaginationWrapper>
    </>
  )
}

export default Pagination

const PaginationWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 15px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const CustomMUIPagination = styled(MUIPagination)(() => {
  const { theme } = useContext(ThemeContext)
  return {
    '& .MuiPaginationItem-root': {
      color: theme === 'light' ? 'black' : 'white',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: theme === 'light' ? '#E0E0E0' : '#616161',
    },
  }
})
