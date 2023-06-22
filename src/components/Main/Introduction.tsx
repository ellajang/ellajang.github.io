import styled from '@emotion/styled'
import React, { useContext } from 'react'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: React.FC<IntroductionProps> = ({ profileImage }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Background theme={theme}>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Frontend Developer's Diary</SubTitle>
          <Title>Record and Share Space of Frontend Developer, Ella</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction

const Background = styled.div`
  box-sizing: border-box;
  width: 100vw;
  background-image: ${props =>
    props.theme === 'light'
      ? 'linear-gradient(30deg, #90a4ae 100%, #90a4ae 100%)'
      : 'linear-gradient(30deg, #11151990 100%, #12171b 120%)'};
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 768px;
  height: 380px;
  margin: 0px auto;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    height: 330px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
