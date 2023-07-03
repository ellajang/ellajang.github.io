import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ThemeContext } from 'hooks/useTheme'
import { useContext } from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'

type SearchPostProps = PostFrontmatterType & {
  slug: string
}

const SearchList: React.FC<{ posts: SearchPostProps[] }> = ({ posts }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ListContainer>
      {posts.map(post => (
        <ListItem to={post.slug} theme={theme} key={post.slug}>
          <ItemWrapper>
            <Title>{post.title}</Title>
            <Summary>{post.summary}</Summary>
            <CategoryDateWrapper>
              <Category>
                {post.categories.map(category => (
                  <CategoryItem key={category} theme={theme}>
                    {category}
                  </CategoryItem>
                ))}
              </Category>
              &nbsp; |&nbsp;&nbsp;<Date>{post.date}</Date>
            </CategoryDateWrapper>
          </ItemWrapper>
          <ThumbnailImageContainer>
            {post.thumbnail?.childImageSharp?.gatsbyImageData && (
              <ThumbnailImage
                image={getImage(post.thumbnail.childImageSharp.gatsbyImageData)}
                alt="Post Item Image"
              />
            )}
          </ThumbnailImageContainer>
        </ListItem>
      ))}
    </ListContainer>
  )
}

export default SearchList

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  margin: 30px auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: calc(100% - 120px);
    margin: 20px auto;
  }
`

const ListItem = styled(Link)`
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 10px;
  width: 100%;
  color: ${props =>
    props.theme === 'light' ? '0 0 4px rgba(0, 0, 0, 0.15)' : '#cfd8dc'};
  flex-grow: 1;
  position: relative;
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
    color: ${props =>
      props.theme === 'light' ? '0 0 4px rgba(0, 0, 0, 0.15)' : '#cfd8dc'};
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 130px;
    padding: 15px;
  }
`
const ItemWrapper = styled.div`
  flex-direction: column;
  width: 1200px;
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
const CategoryDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  margin: 35px 0 0 -5px;
  @media (max-width: 768px) {
    top: 65px;
    flex-direction: column;
  }
`
const Category = styled.span`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: -4px;
  }
`
const Date = styled.span`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin-right: -10px;
  order: 2;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: ${props => (props.theme === 'light' ? '#FFEA75' : '#263238')};
  font-size: 14px;
  font-weight: 700;
  color: ${props => (props.theme === 'light' ? '#7d64b1' : 'white')};
  @media (max-width: 768px) {
    font-size: 10px;
  }
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
    font-size: 13px;
    -webkit-line-clamp: 2;
  }
`
const ThumbnailImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  margin: 10px;
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
