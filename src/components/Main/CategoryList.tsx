import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ThemeContext } from 'hooks/useTheme'
import React, { ReactNode, useContext } from 'react'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
  active: boolean
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <CategoryListWrapper>
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
            theme={theme}
          >
            #{name}({count})
          </CategoryItem>
        ))}
      </CategoryListWrapper>
    </>
  )
}

export default CategoryList

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 49px;
    padding: 0 20px;
  }
`

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '900' : '400')};
  cursor: pointer;
  color: ${props => (props.theme === 'light' ? 'black' : '#cfd8dc')};
  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
