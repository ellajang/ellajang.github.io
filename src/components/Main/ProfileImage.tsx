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
        <ProfileBackground />
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
  width: 260px;
  height: 260px;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`

const ProfileBackground = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'absolute',
    width: '120%',
    height: '90%',
    marginBottom: '90px',
    borderRadius: '50%',
    boxShadow:
      theme.theme === 'light'
        ? '0 0 8px rgba(0, 0, 0, 0.15)'
        : '0 0 3px rgba(12, 12, 12, 0.848)',
    transition: '0.3s box-shadow',
    backgroundColor:
      theme.theme === 'light' ? '#f4f0f8' : 'rgba(255, 255, 255, 0.1)',
    '@media (max-width: 768px)': {
      marginTop: '60px',
      width: '130%',
      height: '100%',
    },
  }
})

const ProfileImageWrapper = styled(GatsbyImage)`
  position: relative;
  width: 230px;
  height: 230px;
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`
