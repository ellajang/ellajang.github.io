import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import React, { useContext } from 'react'

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
  width: 90px;
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
  width: 650px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  &.open {
    display: none;
  }

  @media (max-width: 768px) {
    width: 600px;
    height: 500px;
  }
`
/* boxShadow:
theme.theme === 'light'
  ? '0 0 8px rgba(0, 0, 0, 0.15)'
  : '0 0 3px rgba(211, 204, 204, 0.973)', */
