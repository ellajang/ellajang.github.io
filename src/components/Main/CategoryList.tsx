import React, { useContext, useMemo } from 'react'
import { navigate } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/useTheme'

type CategoryListProps = {
  postsByCategory: {
    [category: string]: PostListItemType[]
  }
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

const CategoryList: React.FC<CategoryListProps> = ({ postsByCategory }) => {
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
    navigate(`/${category}`)
  }

  const theme = useContext(ThemeContext)
  return (
    <CategoryWrapper>
      <IconWrapper>🗂&nbsp;카테고리 별 게시물</IconWrapper>
      <CategoryContainer>
        {Object.keys(recentPostsByCategory).map((category, index) => (
          <CategoryItemWrapper key={index} theme={theme}>
            <Category
              theme={theme}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              <CategoryFolder theme={theme} />
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
                    <span>{node.frontmatter.title}</span>
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
  margin: 100px auto;

  @media (max-width: 768px) {
    margin: 60px 20px;
  }
`

const Category = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    width: '100%',
    margin: '20px 0px 0px 0px',
    padding: '15px',
    boxSizing: 'border-box',
    backgroundColor: theme.theme === 'light' ? '#fafafa' : '#272B2F',
    cursor: 'pointer',
    borderRadius: '0px 25px 10px 10px',
    transition: ' 0.3s box-shadow',
    boxShadow:
      theme.theme === 'light'
        ? '0 0 1px rgba(0, 0, 0, 0.15)'
        : '0 0 1px rgba(211, 204, 204, 0.973)',
    ' @media (max-width: 768px) ': {
      width: '100%',
    },
  }
})

const CategoryFolder = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'absolute',
    top: '-30px',
    left: '0',
    zIndex: '2',
    width: '120px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '5px',
    backgroundColor: theme.theme === 'light' ? '#7d64b1' : '#0f0e10',
    clipPath: 'polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%)',
    transition: 'clip-path 0.3s ease',
    borderTopLeftRadius: '8px',
    boxShadow:
      theme.theme === 'light'
        ? '0 0 10px rgba(7, 0, 0, 0.27)'
        : '0 0 12px rgba(255, 255, 255, 0.814)',
  }
})

const CategoryHeader = styled('h3')(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
  }
})

const CategoryContent = styled.ul`
  display: 'flex';
`

const NameWrapper = styled('li')(() => {
  const theme = useContext(ThemeContext)
  return {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '12px 35px 12px 0px',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
  }
})

const ContentWrapper = styled('li')(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0 0 0',
    color: theme.theme === 'light' ? 'black' : '#d9dee0',
  }
})

const IconWrapper = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  margin: 40px auto;
  left: 220px;

  @media (max-width: 768px) {
    margin: 30px auto;
    left: 40px;
  }
`

const CategoryItemWrapper = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'relative',
    flexBasis: '30%',
    flexGrow: '1',
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: '3',
    boxSizing: 'border-box',
    backgroundColor: theme.theme === 'light' ? '#7d64b1' : '#0f0e10',
    margin: '40px 10px 20px 20px',
    borderRadius: '0px 15px 10px 10px',
    transition: 'borderRadius 0.3s ease',
    boxShadow:
      theme.theme === 'light'
        ? '0 0 8px rgba(0, 0, 0, 0.15)'
        : '0 0 3px rgba(211, 204, 204, 0.973)',
    '@media (max-width: 768px)': {
      flexBasis: '132%',
    },
    '&:hover': {
      transform: 'scale(0.92)',
      [`${Category}`]: {
        margin: '20px 0px 0px 10px',
        boxShadow:
          theme.theme === 'light'
            ? '0 0 10px rgba(7, 0, 0, 0.27)'
            : '0 0 10px rgba(255, 255, 255, 0.3)',
      },
    },
    [`${CategoryFolder}`]: {
      top: '-29.74px',

      '@media (max-width: 768px)': {
        top: '-29.47px',
      },
    },
  }
})
