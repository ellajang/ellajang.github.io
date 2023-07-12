import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import React, { useContext } from 'react'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage }) => {
  return (
    <>
      <ProfileWrapper>
        <GlobalStyle />
        <ProfileImageWrapper image={profileImage} alt="Profile Image" />
      </ProfileWrapper>
    </>
  )
}

export default ProfileImage

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 400px;
  margin-right: 50px;
  /* @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  } */
`

const ProfileImageWrapper = styled(GatsbyImage)`
  position: relative;
  width: 200px;
  height: 310px;
  @media (max-width: 768px) {
    width: 100px;
    height: 90px;
  }
`
