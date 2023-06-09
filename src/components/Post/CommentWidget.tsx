import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/Theme'
import React, { createRef, useContext, useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'ellajang/ellajang.github.io'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const CommentWidget: React.FC = () => {
  const element = createRef<HTMLDivElement>()
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (element.current === null) return

    while (element.current.firstChild) {
      element.current.firstChild.remove()
    }

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: theme === 'light' ? `github-light` : 'dark-blue',
      crossorigin: 'anonymous',
      async: 'true',
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [theme])
  return <UtterancesWrapper ref={element} />
}

export default CommentWidget

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
