import React, { useContext } from 'react'

import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { ThemeContext } from 'hooks/useTheme'

type ProfileImageProps = {
  profileImage: string
  darkModeImage: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  profileImage,
  darkModeImage,
}) => {
  const theme = useContext(ThemeContext)
  const imageSrc = theme.theme === 'dark' ? darkModeImage : profileImage
  return (
    <>
      <ProfileWrapper>
        <GlobalStyle />
        <ProfileImageWrapper src={imageSrc} alt="Profile Image" />
      </ProfileWrapper>
    </>
  )
}

export default ProfileImage

const ProfileWrapper = styled.div`
  width: 995px;
  height: 400px;
  @media (max-width: 768px) {
    width: 440px;
    height: 250px;
  }
`

const ProfileImageWrapper = styled.img`
  width: 1000px;
  height: 540px;
  @media (max-width: 768px) {
    width: 450px;
    height: 250px;
  }
`
