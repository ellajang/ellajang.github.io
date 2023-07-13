import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import React, { useContext } from 'react'

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
  width: 1000px;
  height: 600px;
  @media (max-width: 768px) {
    width: 700px;
    height: 360px;
  }
`

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 1000px;
  height: 600px;
  @media (max-width: 768px) {
    width: 570px;
    height: 360px;
  }
`
