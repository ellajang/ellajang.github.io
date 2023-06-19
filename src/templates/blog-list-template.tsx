/* import PostHead from 'components/Post/PostHead'
import Template from 'components/Common/Template'
import { graphql } from 'gatsby'
import React from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import { ThemeContextProvider } from 'hooks/Theme'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

const BlogListTemplate: React.FC<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        summary,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicUrl,
        },
      },
    },
  } = edges[0]

  return (
    <ThemeContextProvider>
      <Template
        title={title}
        description={summary}
        url={href}
        image={publicUrl}
      >
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
        />
        <PostContent html={html} />
        <CommentWidget />
      </Template>
    </ThemeContextProvider>
  )
}

export default BlogListTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
 */
