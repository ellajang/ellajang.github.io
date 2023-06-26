import styled from '@emotion/styled'
import { Pagination as MUIPagination } from '@mui/material'
import { navigate } from 'gatsby'
import { ThemeContext } from 'hooks/useTheme'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

type PaginationProps = {
  count: number
  defaultPage?: number
  onChange?: (page: number) => void
  path: string
  category?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  defaultPage = 1,
  onChange = () => {},
  path,
  category = '',
}) => {
  const [page, setPage] = useState(defaultPage)

  useEffect(() => {
    navigate(`${path}?page=${page}&category=${category}`, { replace: true })
  }, [page, category, path])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    if (value > 0 && value <= count) {
      setPage(value)
      onChange(value)
    }
  }
  return (
    <PaginationWrapper>
      <CustomMUIPagination
        count={count}
        page={page}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </PaginationWrapper>
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
