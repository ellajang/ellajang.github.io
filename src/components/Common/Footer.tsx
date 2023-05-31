import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer: React.FC = () => {
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
  background-image: linear-gradient(40deg, #faf9f9f4 100%, #faf9f9f4 100%);
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
