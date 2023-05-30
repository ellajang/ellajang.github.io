import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😊
      <br />© 2023 Developer Ella, Built with Gatsby.
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
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
