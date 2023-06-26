import React, { useContext } from 'react'
import { Global, css } from '@emotion/react'
import { ThemeContext } from 'hooks/useTheme'

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
    width: 100%; // 추가된 코드
    box-sizing: border-box;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
`

export const darkMode = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body {
    background-color: #0d1215;
    width: 100%;
    box-sizing: border-box;
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
  .footer {
    position: absolute;
    bottom: 0;
  }
`

const GlobalStyle: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return <Global styles={theme === 'light' ? lightMode : darkMode} />
}

export default GlobalStyle
