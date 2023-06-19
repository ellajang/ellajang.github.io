import Title from 'components/CategoryPage/Title'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/Theme'
import React from 'react'

const basicResource = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스" />
      </ThemeContextProvider>
    </>
  )
}

export default basicResource
