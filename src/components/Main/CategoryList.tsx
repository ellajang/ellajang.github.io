import React, { useContext, useMemo } from 'react'

import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { ThemeContext } from 'hooks/useTheme'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import FolderImg from './FolderImg'

type CategoryListProps = {
  postsByCategory: {
    [category: string]: PostListItemType[]
  }
  folderClose: IGatsbyImageData
  folderCloseDark: IGatsbyImageData
  folderOpen: IGatsbyImageData
  folderOpenDark: IGatsbyImageData
}

type CategoryNamesType = {
  [key: string]: string
}

const categoryNames: CategoryNamesType = {
  basicResource: '기초 및 학습 리소스',
  frontendCoreTech: '웹 프론트엔드 핵심 기술',
  devEnv: '개발 환경',
  debugging: '디버깅 및 이슈 해결',
  algorithm: '알고리즘',
  memoir: '회고록',
}

const CategoryList: React.FC<CategoryListProps> = ({
  postsByCategory,
  folderClose,
  folderOpen,
  folderCloseDark,
  folderOpenDark,
}) => {
  const recentPostsByCategory = useMemo(() => {
    const recentPostsByCategory: {
      [category: string]: PostListItemType[]
    } = {}

    Object.keys(postsByCategory).forEach(category => {
      const filteredPosts = postsByCategory[category]
        .filter(edge => edge.node.frontmatter.date)
        .sort(
          (a, b) =>
            new Date(b.node.frontmatter.date).getTime() -
            new Date(a.node.frontmatter.date).getTime(),
        )

      recentPostsByCategory[category] = filteredPosts.slice(0, 4)
    })

    return recentPostsByCategory
  }, [postsByCategory])

  const getCategoryName = (category: string): string => {
    return categoryNames[category]
  }
  const handleCategoryClick = (category: string) => {
    void navigate(`/${category}`)
  }

  const theme = useContext(ThemeContext)
  return (
    <CategoryWrapper>
      <CategoryContainer>
        {Object.keys(recentPostsByCategory).map((category, index) => (
          <CategoryItemWrapper
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <FolderImg
              folderOpen={folderOpen}
              folderClose={folderClose}
              folderOpenDark={folderOpenDark}
              folderCloseDark={folderCloseDark}
            />
            <Category theme={theme} key={category}>
              <CategoryHeader theme={theme}>
                🔎&nbsp;&nbsp;
                {getCategoryName(category)}
              </CategoryHeader>
              <CategoryContent theme={theme}>
                <NameWrapper theme={theme}>
                  <span>제목</span>
                  <span>작성일</span>
                </NameWrapper>
                <hr />
                {recentPostsByCategory[category].map(({ node }, index) => (
                  <ContentWrapper key={index} theme={theme}>
                    <Title>{node.frontmatter.title}</Title>
                    <span>{node.frontmatter.date}</span>
                  </ContentWrapper>
                ))}
              </CategoryContent>
            </Category>
          </CategoryItemWrapper>
        ))}
      </CategoryContainer>
    </CategoryWrapper>
  )
}

export default CategoryList

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 90px;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 0px;
  }
`

const CategoryHeader = styled('h3')(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    alignItems: 'center',
    margin: '10px auto',
    pointerEvents: 'auto',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
    ' @media (max-width: 768px) ': {
      fontSize: '16px',
      margin: '5px auto',
    },
  }
})

const CategoryContent = styled.ul`
  justify-content: space-between;
`

const NameWrapper = styled('li')(() => {
  const theme = useContext(ThemeContext)
  return {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px 35px 7px 0px',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
    ' @media (max-width: 768px) ': {
      fontSize: '14px',
    },
  }
})

const ContentWrapper = styled('li')(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0 0 0px',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
    ' @media (max-width: 768px) ': {
      margin: '8px 0 0 0px',
      fontSize: '14px',
    },
  }
})
const Title = styled('span')(() => {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '240px',
  }
})

const Category = styled('div')(() => {
  return {
    width: '77%',
    margin: '19px auto',
    padding: '9px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    position: 'relative',
    marginLeft: '7px',
    transition: ' 0.3s box-shadow',
    '@media (max-width: 1250px)': {
      width: '90%',
      minHeight: '220px',
      marginLeft: '20px',
      maxWidth: '350px',
      overflow: 'auto',
    },
    ' @media (max-width: 768px) ': {
      width: '77%',
      minHeight: '190px',
      marginLeft: '19px',
      maxWidth: '310px',
      overflow: 'auto',
    },
    pointerEvents: 'none',
  }
})

const CategoryItemWrapper = styled('div')(() => {
  return {
    position: 'relative',
    flexBasis: '30%',
    flexGrow: '1',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    margin: '0px 0px 20px 20px',
    '@media (max-width: 1250px)': {
      flexBasis: '45%',
      margin: '3px 0px 0px 20px',
    },
    '@media (max-width: 768px)': {
      flexBasis: '60%',
      margin: '0px 0px 0px 70px',
    },
  }
})
