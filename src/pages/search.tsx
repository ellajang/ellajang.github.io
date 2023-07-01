import React, { useContext, useState } from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import usePosts from 'hooks/usePosts'
import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/useTheme'
import Header from 'components/Common/Header'
import CreateIcon from '@mui/icons-material/Create'
import SearchList from 'components/Search/SearchList'
import Search from 'components/Search/Seach'
import Pagination from 'components/Common/Pagination'

const SearchResultsPage: React.FC = () => {
  const { search } = useLocation()
  const { term = '' } = queryString.parse(search)
  const [searchTerm, setSearchTerm] = useState(
    term !== null ? String(term) : '',
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const posts = usePosts()
  const itemsPerPage = 2
  const handleSearch = () => {
    setCurrentPage(1)
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`)
  }

  const filteredPosts = posts.filter(
    post =>
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.date.includes(searchTerm) ||
      post.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const filteredPost = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    navigate(`/search/?term=${encodeURIComponent(searchTerm)}&page=${page}`, {
      replace: true,
    })
  }

  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <Header hideSearch={true} />
      <Search setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {searchTerm !== '' && (
        <SeachResult>
          <h2>
            검색결과 : {searchTerm} ({filteredPosts.length})
          </h2>
        </SeachResult>
      )}
      <Divider />
      {filteredPosts.length > 0 && searchTerm !== '' ? (
        <>
          <SearchList posts={filteredPost} />
          <PaginationWrapper>
            <Pagination
              count={Math.ceil(filteredPosts.length / itemsPerPage)}
              defaultPage={currentPage}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              path={''}
            />
          </PaginationWrapper>
        </>
      ) : (
        <NoDataMessage>
          <CreateIcon />
          &nbsp; No Posts Available
        </NoDataMessage>
      )}
    </div>
  )
}

export default SearchResultsPage

const NoDataMessage = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 25px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SeachResult = styled.div`
  margin-left: 80px;
  color: #6343a8;
  @media (max-width: 768px) {
    width: calc(100% - 70px);
    margin: 20px 0px 0px 58px;
    font-size: 13px;
  }
`
const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 70px);
  margin: 20px 0 12px 40px;
  @media (max-width: 768px) {
    width: calc(100% - 70px);
    margin: 20px 0px 0px 20px;
  }
`
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
