import DetailList from 'components/CategoryPage/DetailList'
import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/Theme'
import React from 'react'

const DETAIL_CATEGORY_LIST = {
  All: 5,
  CS: 2,
  DB: 3,
  DS: 4,
  NETWORK: 4,
  OS: 3,
}

const basicResource = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스" />
        <DetailList
          basePath="basicResource"
          selectedDetailCategory="All"
          detailCategoryList={DETAIL_CATEGORY_LIST}
        />
      </ThemeContextProvider>
    </>
  )
}

export default basicResource
