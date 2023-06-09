import { useContext } from 'react'

import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub'
import { ThemeContext } from 'hooks/useTheme'

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <FooterWrapper theme={theme}>
      © 2023 Developer Ella, Built with Gatsby.
      <a href={'https://github.com/ellajang'} target="_blank">
        <GitHubIcon />
      </a>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  padding: 17px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  left: 0;
  width: 100%;
  color: ${props => (props.theme === 'light' ? '#263238' : '#c4d0d7')};
  background-color: ${props =>
    props.theme === 'light' ? '#f7fafc' : '#12171b'};
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
