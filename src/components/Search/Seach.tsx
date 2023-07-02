import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

type SearchProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  handleSearch: () => void
}

const Search: React.FC<SearchProps> = ({ setSearchTerm, handleSearch }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    setSearchTerm(inputValue)
    handleSearch()
  }

  return (
    <SearchWrapper>
      <SearchInput
        value={inputValue}
        onChange={handleChange}
        placeholder="검색어를 입력하세요."
      />
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  )
}

export default Search

const SearchWrapper = styled.div`
  position: relative;
  color: #212121;
  border: '1px solid #b0bec5';
  border-radius: 10px;
  background-color: #f4f2f2;
  &:hover {
    background-color: #f4f2f2;
    border: '1px solid #c9d2d7';
  }
  width: 40%;
  margin: 130px auto;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 100px;
  }
`

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 93%;
  height: 33px;
  outline: none;
  font-size: 16px;
  color: #212121;
  background-color: transparent;

  &:focus {
    border: 2px solid #7d64b1;
  }

  &::placeholder {
    color: #757575;
  }
  @media (max-width: 768px) {
    height: 30px;
  }
`

const SearchButton = styled.button`
  width: 9%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #7d64b1;
  color: white;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 13%;
  }
`
