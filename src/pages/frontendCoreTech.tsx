import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/useTheme'
import React from 'react'

const frontendCoreTech = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="프론트엔드 핵심 기술" />
      </ThemeContextProvider>
    </>
  )
}

export default frontendCoreTech
