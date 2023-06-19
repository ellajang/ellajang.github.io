import Title from 'components/CategoryPage/Title'
import Header from 'components/Common/Header'
import { ThemeContextProvider } from 'hooks/Theme'
import React from 'react'

export default function CS() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <Title titleText="기초 및 학습 리소스 / 컴퓨터구조" />
      </ThemeContextProvider>
    </>
  )
}
