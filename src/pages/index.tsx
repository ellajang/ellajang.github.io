import React from 'react'
import Introduction from 'components/Main/Introduction'
import Template from 'components/Common/Template'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { parse } from 'query-string'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import { useLocation } from '@reach/router'
import styled from '@emotion/styled'
import useCategoryPosts from 'hooks/useCategoryPost'
import GlobalStyle from 'components/Common/GlobalStyle'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
    darkModeImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
    darkModeImage: {
      childImageSharp: { gatsbyImageData: darkModeImageData },
    },
  },
}) => {
  const location = useLocation()
  const parsed: { [key: string]: string | string[] | null } = parse(
    location.search,
  )
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const postsByCategory = useCategoryPosts(edges)

  return (
    <>
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
        <Template
          title={title}
          description={description}
          url={siteUrl}
          image={publicURL}
        >
          <Introduction
            profileImage={gatsbyImageData}
            darkModeImage={darkModeImageData}
          />
          <PostList posts={edges} selectedCategory={selectedCategory} />
          <Divider />
          <CategoryList postsByCategory={postsByCategory} />
        </Template>
      </ThemeContextProvider>
    </>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 1960, height: 1860)
      }
      publicURL
    }
    darkModeImage: file(name: { eq: "profile-image-dark" }) {
      childImageSharp {
        gatsbyImageData(width: 1960, height: 1760)
      }
      publicURL
    }
  }
`
const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 240px);
  margin: 27px 0 -12px 120px;
  @media (max-width: 768px) {
    width: calc(100% - 75px);
    margin: 10px 0px 0px 40px;
  }
`
