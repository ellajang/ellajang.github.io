import React, { useContext } from 'react'

import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'

type FolderImgProps = {
  folderClose: IGatsbyImageData
  folderCloseDark: IGatsbyImageData
  folderOpen: IGatsbyImageData
  folderOpenDark: IGatsbyImageData
}

const FolderImg: React.FC<FolderImgProps> = ({
  folderClose,
  folderCloseDark,
  folderOpen,
  folderOpenDark,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <FolderWrapper>
        <GlobalStyle />
        <FolderImgWrapper
          className="close"
          image={theme.theme === 'light' ? folderClose : folderCloseDark}
          alt="Folder Closed"
        />
        <FolderImgWrapper
          className="open"
          image={theme.theme === 'light' ? folderOpen : folderOpenDark}
          alt="Folder Opened"
        />
      </FolderWrapper>
    </>
  )
}

export default FolderImg

const FolderWrapper = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80px;
    height: 30px;
  }

  &:hover .close {
    display: none;
  }

  &:hover .open {
    display: block;
  }
`

const FolderImgWrapper = styled(GatsbyImage)`
  width: 390px;
  height: 270px;
  position: absolute;
  cursor: pointer;
  &.open {
    display: none;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 245px;
  }

  @media (max-width: 414px) {
    width: 250px;
    height: 145px;
  }
`
