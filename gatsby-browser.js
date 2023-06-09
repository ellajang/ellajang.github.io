import 'prismjs/themes/prism-tomorrow.css'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeContextProvider } from './src/hooks/Theme'
import GlobalStyle from './src/components/Common/GlobalStyle'

const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <GlobalStyle />
    {element}
  </ThemeContextProvider>
)
export default wrapRootElement
