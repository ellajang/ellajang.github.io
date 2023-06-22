import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import React from 'react'

export default function algorithm() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="알고리즘" />
      </ThemeContextProvider>
    </>
  )
}
