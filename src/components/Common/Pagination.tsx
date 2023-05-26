import styled from '@emotion/styled'
import { Pagination as MUIPagination } from '@mui/material'
import React, { ChangeEvent, FunctionComponent, useState } from 'react'

type PaginationProps = {
  count: number
  defaultPage?: number
  onChange?: (page: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  count,
  defaultPage = 1,
  onChange = () => {},
}) => {
  const [page, setPage] = useState(defaultPage)

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
    onChange(value)
  }
  return (
    <PaginationWrapper>
      <MUIPagination
        count={count}
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
        shape="rounded"
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
  padding: 5px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
