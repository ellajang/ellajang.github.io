import React, { useMemo } from 'react'
import { Link, navigate } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import styled from '@emotion/styled'

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
    // 해당 카테고리로 이동
    navigate(`/${category}`)
  }
  return (
    <CategoryContainer>
      {Object.keys(recentPostsByCategory).map(category => (
        <Category key={category} onClick={() => handleCategoryClick(category)}>
          <CategoryFolder />
          <CategoryHeader>{getCategoryName(category)}</CategoryHeader>
          <CategoryContent>
            <NameWrapper>
              <span>제목</span>
              <span>작성일</span>
            </NameWrapper>
            {recentPostsByCategory[category].map(({ node }, index) => (
              <li key={index}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                <span>{node.frontmatter.date}</span>
              </li>
            ))}
          </CategoryContent>
        </Category>
      ))}
    </CategoryContainer>
  )
}

export default CategoryList

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 200px;

  @media (max-width: 1200px) {
    margin: 0px 100px;
  }

  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`

const Category = styled.div`
  width: calc(33.33% - 20px);
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const CategoryFolder = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  width: 40px;
  height: 40px;
  background-color: #3f51b5;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CategoryHeader = styled.h2`
  margin-left: 20px;
`
const NameWrapper = styled.li`
  list-style-type: none;
`
const CategoryContent = styled.ul``
