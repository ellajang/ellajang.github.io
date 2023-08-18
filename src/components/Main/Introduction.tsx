import React from 'react'

import styled from '@emotion/styled'

import ProfileImage from './ProfileImage'

type IntroductionProps = {
  profileImage: string
  darkModeImage: string
}

const Introduction: React.FC<IntroductionProps> = ({
  profileImage,
  darkModeImage,
}) => {
  return (
    <>
      <Background>
        <Wrapper>
          <ProfileWrapper>
            <ProfileImage
              profileImage={profileImage}
              darkModeImage={darkModeImage}
            />
          </ProfileWrapper>
        </Wrapper>
        <Divider />
      </Background>
    </>
  )
}

export default Introduction

const ProfileWrapper = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45px',
    '@media (max-width: 768px)': {
      marginTop: '0px',
      marginBottom: '150px',
    },
  }
})

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 350px;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: 370px;
    flex-direction: column-reverse;
  }
`

const Background = styled('div')(() => {
  return {
    boxSizing: 'border-box',
    width: '100%',
  }
})

const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 240px);
  margin: 200px 0 -12px 120px;
  @media (max-width: 768px) {
    width: calc(100% - 75px);
    margin: -127px 0px 0px 40px;
  }
`
