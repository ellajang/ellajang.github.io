import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: React.FC<ProfileImageProps> = ({ profileImage }) => {
  return (
    <>
      <ProfileImageWrapper image={profileImage} alt="Profile Image" />
    </>
  )
}

export default ProfileImage

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
