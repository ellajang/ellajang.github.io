import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <a href={'https://github.com/ellajang'} target="_blank">
        <MenuIcon />
      </a>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 5000px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
