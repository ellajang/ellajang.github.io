import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    publicURL: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type PostListItemType = {
  id: string
  title: string
  date: string
  categories: string[]
  summary: string
  slug: string
  node: {
    frontmatter: any
    id: string
    fields: {
      slug: string
    }
  }
  thumbnail: {
    publicURL: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

export type PageDataProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

export type PostQueryResult = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: PostFrontmatterType
      fields: {
        slug: string
      }
      excerpt: string
    }[]
  }
}

export type Post = {
  title: string
  date: string
  slug: string
  excerpt: string
  summary: string
  categories: string[]
  thumbnail: {
    publicURL: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}
