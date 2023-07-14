import React, { useContext } from 'react'

import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
  darkModeImage: IGatsbyImageData
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  profileImage,
  darkModeImage,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <ProfileWrapper>
        <GlobalStyle />
        <ProfileImageWrapper
          image={theme.theme === 'light' ? profileImage : darkModeImage}
          alt="Profile Image"
        />
      </ProfileWrapper>
    </>
  )
}

export default ProfileImage

const ProfileWrapper = styled.div`
  width: 730px;
  height: 380px;
  @media (max-width: 768px) {
    width: 440px;
    height: 250px;
  }
`

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 760px;
  height: 440px;
  @media (max-width: 768px) {
    width: 450px;
    height: 250px;
  }
`
