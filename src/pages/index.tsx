import React from 'react'

import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Template from 'components/Common/Template'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import { PostListItemType } from 'types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import { useLocation } from '@reach/router'
import useCategoryPosts from 'hooks/useCategoryPost'
import GlobalStyle from 'components/Common/GlobalStyle'
import LogoImg from 'components/Common/LogoImg'
import { parse } from 'query-string'

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
      publicURL: string
    }
    darkModeImage: {
      publicURL: string
    }
    folderClose: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
    folderCloseDark: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
    folderOpen: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
    folderOpenDark: {
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
    file: { publicURL: profileImageURL },
    darkModeImage: { publicURL: darkModeImageURL },
    folderClose: {
      childImageSharp: { gatsbyImageData: folderCloseData },
    },
    folderCloseDark: {
      childImageSharp: { gatsbyImageData: folderCloseDarkData },
    },
    folderOpen: {
      childImageSharp: { gatsbyImageData: folderOpenData },
    },
    folderOpenDark: {
      childImageSharp: { gatsbyImageData: folderOpenDarkData },
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
      <LogoImg />
      <ThemeContextProvider>
        <Header />
        <GlobalStyle />
        <Template
          title={title}
          description={description}
          url={siteUrl}
          image={profileImageURL}
        >
          <Introduction
            profileImage={profileImageURL}
            darkModeImage={darkModeImageURL}
          />
          <PostList posts={edges} selectedCategory={selectedCategory} />
          <Divider />
          <IconWrapper>🗂&nbsp;카테고리 별 게시물</IconWrapper>
          <CategoryList
            postsByCategory={postsByCategory}
            folderClose={folderCloseData}
            folderCloseDark={folderCloseDarkData}
            folderOpen={folderOpenData}
            folderOpenDark={folderOpenDarkData}
          />
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
      publicURL
    }
    darkModeImage: file(name: { eq: "profile-image-dark" }) {
      publicURL
    }
    folderClose: file(name: { eq: "folderClose" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
    folderCloseDark: file(name: { eq: "folderCloseDark" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
    folderOpen: file(name: { eq: "folderOpen" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
    folderOpenDark: file(name: { eq: "folderOpenDark" }) {
      childImageSharp {
        gatsbyImageData
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
const IconWrapper = styled.h3`
  margin: 60px 0px 0px 180px;
  display: flex;
  align-items: center;
  @media (max-width: 1300px) {
    margin: 30px 0px 0px 70px;
  }
`
