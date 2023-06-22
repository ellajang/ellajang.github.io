import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import React from 'react'

const memoir = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="회고록" />
      </ThemeContextProvider>
    </>
  )
}

export default memoir
