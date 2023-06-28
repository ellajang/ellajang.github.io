import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import { FunctionComponent, useContext } from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

type DetailPostItemProps = PostFrontmatterType & {
  link: string
}

const DetailPostItem: FunctionComponent<DetailPostItemProps> = ({
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
    <DetailPostItemWrapper to={link} theme={theme}>
      <PostItemContent theme={theme}>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Date>{date}</Date>
      </PostItemContent>
      <ThumbnailImageContainer>
        <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      </ThumbnailImageContainer>
    </DetailPostItemWrapper>
  )
}

export default DetailPostItem

const DetailPostItemWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: ${props =>
    props.theme === 'light'
      ? '0 0 4px rgba(0, 0, 0, 0.15)'
      : '0 0 4px rgba(255, 255, 255, 0.4)'};
  transition: 0.3s box-shadow;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    box-shadow: ${props =>
      props.theme === 'light'
        ? '0 0 3px rgba(0, 0, 0, 0.3)'
        : '0 0 3px rgba(255, 255, 255, 0.3)'};
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 200px;
  flex-grow: 1;
  position: relative;
  color: ${props => (props.theme === 'light' ? 'black' : '#cfd8dc')};
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`
const ThumbnailImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  margin: 15px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
`

const Category = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0 0 -5px;
  position: absolute;
  bottom: 50px;
  order: 1;
  @media (max-width: 768px) {
    top: 75px;
  }
`
const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  position: absolute;
  bottom: 20px;
  order: 2;
  @media (max-width: 768px) {
    top: 150px;
  }
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
  margin-top: 20px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 17px;
  opacity: 0.8;
  order: 0;
  @media (max-width: 768px) {
    font-size: 15px;
    -webkit-line-clamp: 2;
  }
`