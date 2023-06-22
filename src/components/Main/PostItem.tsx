import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import React, { useContext } from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: React.FC<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <PostItemWrapper to={link} theme={theme}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <PostItemContent theme={theme}>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item} theme={theme}>
              {item}
            </CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: ${props => (props.theme === 'light' ? 'black' : '#cfd8dc')};
`
const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: ${props =>
    props.theme === 'light'
      ? '0 0 8px rgba(0, 0, 0, 0.15)'
      : '0 0 8px rgba(255, 255, 255, 0.4)'};
  transition: 0.3s box-shadow;
  cursor: pointer;
  &:hover {
    box-shadow: ${props =>
      props.theme === 'light'
        ? '0 0 10px rgba(0, 0, 0, 0.3)'
        : '0 0 10px rgba(255, 255, 255, 0.3)'};
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: ${props => (props.theme === 'light' ? 'black' : '#263238')};
  font-size: 14px;
  font-weight: 700;
  color: ${props => (props.theme === 'light' ? 'white' : '#cfd8dc')};
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`
