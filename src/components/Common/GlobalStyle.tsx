import React, { useContext } from 'react'
import { Global, css } from '@emotion/react'
import { ThemeContext } from 'hooks/Theme'

export const lightMode = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

export const darkMode = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }
  body {
    background-color: #0d1215;
  }

  a,
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
  h3,
  p,
  h2,
  ul {
    color: #c3c7cc;
  }
`

const GlobalStyle: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return <Global styles={theme === 'light' ? lightMode : darkMode} />
}

export default GlobalStyle