import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import usePosts from 'hooks/usePosts'
import styled from '@emotion/styled'
import { ThemeContextProvider } from 'hooks/useTheme'
import Header from 'components/Common/Header'
import CreateIcon from '@mui/icons-material/Create'
import SearchList from 'components/Search/SearchList'
import Search from 'components/Search/Seach'
import { usePaginationFooter } from 'hooks/usePaginationFooter'
import Footer from 'components/Common/Footer'
import { Post, PostListItemType } from 'types/PostItem.types'
import GlobalStyle from 'components/Common/GlobalStyle'

const SearchResultsPage: React.FC = () => {
  const { search } = useLocation()
  const { term = '', page = '1' } = queryString.parse(search)
  const [searchTerm, setSearchTerm] = useState(
    term !== null ? String(term) : '',
  )
  const [_currentPage, setCurrentPage] = useState(page)

  const posts = usePosts()
  const itemsPerPage = 5

  const filteredPosts: Post[] | PostListItemType[] = posts.filter(
    post =>
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.date.includes(searchTerm) ||
      post.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearch = () => {
    setCurrentPage(page)
    navigate(`/search?term=${encodeURIComponent(searchTerm)}&page=${page}`)
  }

  const { currentItems, PaginationNFooter } = usePaginationFooter(
    filteredPosts,
    itemsPerPage,
  )

  return (
    <ThemeContextProvider>
      <Header hideSearch={true} />
      <GlobalStyle />
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
          <SearchList posts={currentItems} />
          <PaginationWrapper>
            <PaginationNFooter path="/search/" category="search results" />
          </PaginationWrapper>
        </>
      ) : (
        <NoDataMessage>
          <CreateIcon />
          &nbsp; No Posts Available
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </NoDataMessage>
      )}
    </ThemeContextProvider>
  )
}

export default SearchResultsPage

const NoDataMessage = styled.div`
  margin: 100px;
  text-align: center;
  font-size: 25px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
`

const SeachResult = styled.div`
  margin-left: 80px;
  color: #6343a8;
  @media (max-width: 768px) {
    width: calc(100% - 70px);
    margin: 20px 0px 0px 40px;
    font-size: 13px;
  }
`
const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 70px);
  margin: 30px 0 12px 40px;
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin: 20px 0px 0px 30px;
  }
`
const PaginationWrapper = styled.div`
  font-size: 15px;
  position: relative;
  width: 100%;
  bottom: 40px;
  margin-top: -160px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
