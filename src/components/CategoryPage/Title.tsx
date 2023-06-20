import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/Theme'
import { useContext } from 'react'

type TitleProps = {
  titleText: string
}

const Title: React.FC<TitleProps> = ({ titleText }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Background theme={theme}>
      <Wrapper>
        <TitleStyle>{titleText}</TitleStyle>
      </Wrapper>
    </Background>
  )
}
export default Title

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  @media (max-width: 768px) {
    width: 100%;
    height: 120px;
    padding: 0 20px;
  }
`
const Background = styled.div`
  box-sizing: border-box;
  width: 100vw;
  margin: 2px 0px 0px -8px;
  background-color: ${props =>
    props.theme === 'light' ? '#90a4ae' : '#0b1118'};
  color: #ffffff;
`

const TitleStyle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 26px 50px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 22px 20px;
  }
`
