import { useMemo } from 'react'
import { PostListItemType } from 'types/PostItem.types'
import {
  BASIC_RESOURCE_CATEGORIES,
  DEV_ENV,
  FRONTEND_CORE_TECH,
} from '../constants/CategoryName'

const useCategoryPosts = (edges: PostListItemType[]) => {
  const basicResourcePosts = useMemo(
    () =>
      edges.filter(post =>
        BASIC_RESOURCE_CATEGORIES.some(category =>
          post.node.frontmatter.categories.includes(category.value),
        ),
      ),
    [edges],
  )

  const frontendCoreTechPosts = useMemo(
    () =>
      edges.filter(post =>
        FRONTEND_CORE_TECH.some(category =>
          post.node.frontmatter.categories.includes(category.value),
        ),
      ),
    [edges],
  )

  const devEnvPosts = useMemo(
    () =>
      edges.filter(post =>
        DEV_ENV.some(category =>
          post.node.frontmatter.categories.includes(category.value),
        ),
      ),
    [edges],
  )

  const debuggingPosts = useMemo(
    () =>
      edges.filter(post =>
        post.node.frontmatter.categories.includes('debugging'),
      ),
    [edges],
  )

  const algorithmPosts = useMemo(
    () =>
      edges.filter(post =>
        post.node.frontmatter.categories.includes('algorithm'),
      ),
    [edges],
  )

  const memoirPosts = useMemo(
    () =>
      edges.filter(post => post.node.frontmatter.categories.includes('memoir')),
    [edges],
  )

  const postsByCategory: { [category: string]: PostListItemType[] } = {
    basicResource: basicResourcePosts.slice(0, 4),
    frontendCoreTech: frontendCoreTechPosts.slice(0, 4),
    devEnv: devEnvPosts.slice(0, 4),
    debugging: debuggingPosts.slice(0, 4),
    memoir: memoirPosts.slice(0, 4),
    algorithm: algorithmPosts.slice(0, 4),
  }

  return postsByCategory
}

export default useCategoryPosts
