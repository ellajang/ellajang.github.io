import React, { useMemo } from 'react'
import Introduction from 'components/Main/Introduction'
import Template from 'components/Common/Template'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { parse } from 'query-string'
import Pagination from 'components/Common/Pagination'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import GlobalStyle from 'components/Common/GlobalStyle'

export const POSTS_PER_PAGE = 10

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
  }
}

const IndexPage: React.FC<IndexPageProps> = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  const parsed: { [key: string]: string | string[] | null } = parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })
          list['All']++
          return list
        },
        { All: 0 },
      ),
    [],
  )
  const [page, setPage] = React.useState(1)
  const handlePageChange = (value: number) => {
    setPage(value)
  }
  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE
    return edges.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [edges, page])

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
          <Introduction profileImage={gatsbyImageData} />
          <CategoryList
            selectedCategory={selectedCategory}
            categoryList={categoryList}
          />
          <PostList
            posts={paginatedPosts}
            selectedCategory={selectedCategory}
          />
          <Pagination
            count={Math.ceil(edges.length / POSTS_PER_PAGE)}
            onChange={handlePageChange}
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
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
