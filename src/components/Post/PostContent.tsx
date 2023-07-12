import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/useTheme'

interface PostContentProps {
  html: string
}

const PostContent: React.FC<PostContentProps> = ({ html }) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <MarkdownRenderer
        theme={theme}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export default PostContent

const MarkdownRenderer = styled.div(() => {
  const theme = useContext(ThemeContext)
  return {
    // Renderer Style
    display: 'flex',
    flexDirection: 'column',
    width: '768px',
    margin: '0 auto',
    padding: '100px 0',
    wordBreak: 'break-all',

    // Markdown Style
    lineHeight: 1.8,
    fontSize: '16px',
    fontWeight: 400,

    // Apply Padding Attribute to All Elements
    p: {
      padding: '3px 0',
    },
    ol: {
      margin: '0px 0px -20px 0px',
    },
    'abbr[title]': {
      cursor: 'pointer',
      '&:hover::after': {
        fontSize: '40px',
      },
    },

    // Adjust Heading Element Style
    'h1,h2,h3': {
      fontWeight: 700,
      marginBottom: '30px',
    },

    '* + h1,* + h2,* + h3': {
      marginTop: '80px',
    },

    'hr + h1,hr + h2,hr + h3': {
      marginTop: 0,
    },

    h1: {
      fontSize: '30px',
    },

    h2: {
      fontSize: '25px',
    },

    h3: {
      fontSize: '20px',
    },
    h4: {
      fontSize: '18px',
    },

    'strong em': {
      color: '#7d64b1',
    },

    // Adjust Quotation Element Style
    blockquote: {
      padding: '5px 15px',
      borderLeft: '7px solid #7d64b1',
      fontWeight: 300,
      fontSize: '20px',
    },

    // Adjust List Element Style
    'ol,ul': {
      marginLeft: '20px',
      padding: '30px 0',
    },

    // Adjust Horizontal Rule style
    hr: {
      margin: '100px 0',
    },

    // Adjust Link Element Style
    a: {
      color: '#4263eb',
      textDecoration: 'underline',
    },

    // Adjust Code Style
    "pre[class*='language-']": {
      margin: '15px 0',
      padding: '15px',
      fontSize: '15px',
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '3px',
      },
    },
    // code block settings
    pre: {
      backgroundColor: theme.theme === 'light' ? '#f4f4f4' : '#303134',
    },
    "code[class*='language-'], pre[class*='language-']": {
      tabSize: 2,
      color: theme.theme === 'dark' ? '#f4f4f4' : '#303134',
    },
    "code[class*='language-text']": {
      background: '#5cb85c',
      color: 'white',
      fontSize: '15px',
    },

    // Markdown Responsive Design
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '80px 20px',
      lineHeight: 1.6,
      fontSize: '14px',
      h1: {
        fontSize: '23px',
      },
      h2: {
        fontSize: '20px',
      },
      h3: {
        fontSize: '17px',
      },
      h4: {
        fontSize: '14px',
      },
      img: {
        width: '100%',
      },
      hr: {
        margin: '50px 0',
      },
    },
  }
})
