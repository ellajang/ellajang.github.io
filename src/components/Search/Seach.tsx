import { useContext, useState } from 'react'

import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search'
import { ThemeContext } from 'hooks/useTheme'
import { navigate } from 'gatsby'

type SearchProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    setSearchTerm(inputValue)
    void navigate(`/search?term=${encodeURIComponent(inputValue)}`)
  }
  const { theme } = useContext(ThemeContext)
  return (
    <SearchWrapper theme={theme}>
      <SearchContainer theme={theme}>
        <SearchInput
          theme={theme}
          value={inputValue}
          onChange={handleChange}
          placeholder="검색어를 입력하세요."
        />
        <SearchButton onClick={handleClick}>
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
    </SearchWrapper>
  )
}

export default Search

const SearchWrapper = styled.div`
  position: relative;
  color: #212121;
  border: '1px solid #b0bec5';
  border-radius: 10px;
  background-color: ${props =>
    props.theme === 'light' ? '#f4f2f2' : '#3C474B'};
  &:hover {
    background-color: ${props =>
      props.theme === 'light' ? '#f4f2f2' : '#3C474B'};
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
  padding: 25px;
  border: none;
  border-radius: 10px;
  width: 93%;
  height: 33px;
  outline: none;
  font-size: 16px;
  color: #212121;
  background-color: transparent;

  &::placeholder {
    color: #757575;
  }
  @media (max-width: 768px) {
    padding: 21px;
  }
`

const SearchButton = styled.button`
  width: 8%;
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
    width: 10%;
  }
`
const SearchContainer = styled.div`
  border-radius: 10px;
  &:focus-within {
    box-shadow: 0 0 0 1px
      ${props => (props.theme === 'dark' ? '#c9d2d7' : '#7d64b1')};
  }
`
