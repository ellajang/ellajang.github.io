import React, { useMemo } from 'react'
import { PostListItemType } from 'types/PostItem.types'
import { DetailListProps } from 'components/CategoryPage/DetailList'

type useDetailCategoryListProps = {
  edges: PostListItemType[]
  categoriesName: string[]
}

const useDetailCategoryList = ({
  edges,
  categoriesName,
}: useDetailCategoryListProps): DetailListProps['detailCategoryList'] => {
  const initialCategoryList: DetailListProps['detailCategoryList'] = {
    All: 0,
    ...categoriesName.reduce((list, category) => {
      list[category] = 0
      return list
    }, {} as DetailListProps['detailCategoryList']),
  }
  const detailcategoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: DetailListProps['detailCategoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (categoriesName.includes(category)) {
              if (list[category] === undefined) list[category] = 1
              else list[category]++
            }
          })
          list['All']++
          return list
        },
        initialCategoryList,
      ),
    [edges, categoriesName],
  )

  return detailcategoryList
}

export default useDetailCategoryList
