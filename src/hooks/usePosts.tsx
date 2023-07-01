import { graphql, useStaticQuery } from 'gatsby'
import { PostQueryResult } from 'types/PostItem.types'

const usePosts = () => {
  const data = useStaticQuery<PostQueryResult>(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            categories
            summary
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.fields.slug,
    excerpt: post.excerpt,
    categories: post.frontmatter.categories,
    thumbnail: post.frontmatter.thumbnail,
    summary: post.frontmatter.summary,
  }))
}

export default usePosts
