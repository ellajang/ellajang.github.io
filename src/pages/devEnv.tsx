import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import React from 'react'

const devEnv = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="개발환경" />
      </ThemeContextProvider>
    </>
  )
}

export default devEnv
