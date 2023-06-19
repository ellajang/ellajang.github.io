import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/Theme'
import { useContext } from 'react'

type TitleProps = {
  titleText: string
}

const Title: React.FC<TitleProps> = ({ titleText }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper>
      <Background theme={theme}>
        <TitleStyle>{titleText}</TitleStyle>
      </Background>
    </Wrapper>
  )
}
export default Title

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 50px 0px 0px -10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 20px;
    padding: 26px 0px 80px 0px;
  }
`
const Background = styled.div`
  padding: 50px 10px 30px 10px;
  width: 100%;
  background-color: ${props =>
    props.theme === 'light' ? '#90a4ae' : '#0b1118'};
  color: #ffffff;
`

const TitleStyle = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
