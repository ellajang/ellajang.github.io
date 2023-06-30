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
        .filter(post => post.node.frontmatter.date)
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
        {Object.keys(recentPostsByCategory).map(category => (
          <CategoryItemWrapper>
            <Category
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              <CategoryFolder />
              <CategoryHeader theme={theme}>
                🔎&nbsp;&nbsp;
                {getCategoryName(category)}
              </CategoryHeader>
              <CategoryContent>
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
`

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 100px 0px 20px 190px;
  @media (max-width: 1200px) {
    margin: 90px 80px 30px 100px;
  }

  @media (max-width: 900px) {
    margin: 90px 100px 0px 100px;
  }

  @media (max-width: 768px) {
    margin: 60px 20px;
  }
`

const Category = styled.div`
  width: 100%;
  margin: 20px 0px 0px 0px;
  padding: 15px;
  box-sizing: border-box;
  background-color: #c7e2ece7;

  border-radius: 0px 25px 10px 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    margin: 20px 0px 0px 10px;
    box-shadow: 0px 1px 8px rgba(96, 134, 148, 0.9);
  }
`

const CategoryFolder = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  z-index: 0;
  width: 120px;
  height: 30px;
  background-color: rgba(96, 134, 148, 0.9);
  border-top-left-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%);
  transition: clip-path 0.3s ease;
  &:hover {
    top: -29.5px;
  }
`

const CategoryHeader = styled.h3`
  display: flex;
  align-items: center;
  color: ${props => (props.theme === 'light' ? '#d9dee0' : 'black')};
`

const CategoryContent = styled.ul``

const NameWrapper = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 12px 35px 12px 0px;
  color: ${props => (props.theme === 'light' ? '#d9dee0' : 'black')};
`

const ContentWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 0 0;
  color: ${props => (props.theme === 'light' ? '#d9dee0' : 'black')};
  span:first-of-type {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const IconWrapper = styled.h3(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    '@media (max-width: 770px)': {
      margin: '0px 0px 1470px 40px',
    },
    '@media (min-width: 771px)': {
      margin: '0px 0px 780px 120px',
    },

    '@media (min-width: 900px)': {
      margin: '0px 0px 780px 120px',
    },
    '@media (min-width: 1000px)': {
      margin: '0px 0px 590px 120px',
    },

    '@media (min-width: 1200px)': {
      margin: '40px 40px 620px 210px',
    },
  }
})

const CategoryItemWrapper = styled.div`
  position: relative;
  flex-basis: 30%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  background-color: rgba(96, 134, 148, 0.9);
  margin: 40px 10px 20px 20px;
  border-radius: 0px 15px 10px 10px;
  transition: border-radius 0.3s ease;
  @media (max-width: 768px) {
    flex-basis: 132%;
  }
  &:hover {
    transform: scale(0.92);
  }

  &:hover ${Category} {
    margin: 20px 0px 0px 10px;
    box-shadow: 0px 1px 8px rgba(96, 134, 148, 0.9);
  }
  &:hover ${CategoryFolder} {
    top: -29.5px;
  }
`
