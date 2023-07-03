import styled from '@emotion/styled'
import React, { useContext } from 'react'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: React.FC<IntroductionProps> = ({ profileImage }) => {
  return (
    <>
      <Background>
        <Wrapper>
          <ProfileWrapper>
            <ProfileImage profileImage={profileImage} />
          </ProfileWrapper>
          <LetterWrapper>
            <Title>
              <Line>안녕하세요 🙇‍♀️ </Line> 끊임없이 성장하려는{' '}
              <Color style={{ animationDelay: '0.1s' }}>개</Color>
              <Color style={{ animationDelay: '0.2s' }}>발</Color>
              <Color style={{ animationDelay: '0.3s' }}>자</Color>
              <Color style={{ animationDelay: '0.4s' }}> E</Color>
              <Color style={{ animationDelay: '0.5s' }}>l</Color>
              <Color style={{ animationDelay: '0.6s' }}>l</Color>
              <Color style={{ animationDelay: '0.7s' }}>a</Color>의 개발
              블로그입니다.
            </Title>
            <br />
            <SubTitle>
              <Line>새로운 기술과 빠르게 변하는 웹개발 트랜드 속에서, </Line>
              <Line>
                새로운 기술과 트렌드를 익혀 사용자 중심의 웹을 만들고,이 공간을
                통해 그 과정을 공유합니다.
              </Line>
              <Line>
                함께 배우고 성장하는 개발자분들과의 소통의 장이 되었으면
                좋겠습니다!
              </Line>
            </SubTitle>
          </LetterWrapper>
        </Wrapper>
        <Divider />
      </Background>
    </>
  )
}

export default Introduction

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 90px;
    margin: 10px 10px 10px 60px;
  }
`

const Line = styled.div`
  margin-bottom: 7px;
`
const Color = styled.span`
  position: relative;
  display: inline-block;
  color: #733bea;
  letter-spacing: -0.8px;
  animation: txtup 1.5s infinite;

  @keyframes txtup {
    0%,
    40%,
    60%,
    80%,
    100% {
      top: 0;
    }
    20% {
      top: -0.3rem;
    }
  }
`

const Background = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    boxSizing: 'border-box',
    width: '100%',
    backgroundImage:
      theme.theme === 'light'
        ? 'white'
        : 'linear-gradient(30deg, #11151990 100%, #12171b 120%)',
  }
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1068px;
  height: 290px;
  margin: 140px auto;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 330px;
    padding: 0 20px;
    flex-direction: column-reverse;
  }
`

const LetterWrapper = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'inline-block',
    position: 'relative',
    padding: '15px',
    marginLeft: '100px',
    marginBottom: '60px',
    borderRadius: '10px',
    backgroundColor:
      theme.theme === 'light' ? '#f4f0f8' : 'rgba(255, 255, 255, 0.1)',
    color: theme.theme === 'light' ? 'black' : 'white',
    '@media (max-width: 768px)': {
      marginLeft: '0px',
    },
    '::after': {
      content: "''",
      position: 'absolute',
      left: '-40px',
      top: '60%',
      borderWidth: '20px',
      borderStyle: 'solid',
      borderColor: `transparent ${
        theme.theme === 'light' ? '#f4f0f8' : 'rgba(255, 255, 255, 0.1)'
      } transparent transparent`,
      '@media (max-width: 768px)': {
        left: '30%',
        top: '100%',
        borderColor: ` ${
          theme.theme === 'light' ? '#f4f0f8' : 'rgba(255, 255, 255, 0.1)'
        } transparent transparent transparent`,
      },
    },
  }
})

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`

const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 240px);
  margin: 27px 0 -12px 120px;
  @media (max-width: 768px) {
    width: calc(100% - 75px);
    margin: -27px 0px 0px 40px;
  }
`
