import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import React from 'react'

export default function debugging() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="디버깅 및 이슈 해결" />
      </ThemeContextProvider>
    </>
  )
}
