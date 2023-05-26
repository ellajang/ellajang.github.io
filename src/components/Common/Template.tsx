import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}
export default Template

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
