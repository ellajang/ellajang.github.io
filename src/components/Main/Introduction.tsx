import styled from '@emotion/styled'
import React from 'react'
import ProfileImage from './ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: React.FC<IntroductionProps> = ({ profileImage }) => {
  return (
    <Background>
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
  width: 100%;
  background-image: linear-gradient(40deg, #90a4ae 100%, #90a4ae 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
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
  margin-top: 9px;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
