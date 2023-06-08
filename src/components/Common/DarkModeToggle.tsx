import { ThemeContext } from 'hooks/Theme'
import React, { useContext, useEffect, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import styled from '@emotion/styled'

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showDarkModeIcon, setShowDarkModeIcon] = useState(theme === 'dark')

  useEffect(() => {
    setShowDarkModeIcon(theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
      setIsTransitioning(false)
    }, 300)

    setTimeout(() => {
      setShowDarkModeIcon(prevShowDarkModeIcon => !prevShowDarkModeIcon)
    }, 300)
  }

  return (
    <ModeButton onClick={toggleTheme}>
      {isTransitioning ? (
        <TransitionIcon>
          {showDarkModeIcon ? (
            <DarkModeIcon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </TransitionIcon>
      ) : (
        <InstantIcon>
          {theme === 'light' ? (
            <DarkModeIcon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </InstantIcon>
      )}
    </ModeButton>
  )
}

export default DarkModeToggle

const ModeButton = styled.div`
  cursor: pointer;
  margin: 10px 20px 5px 0px;
`

const TransitionIcon = styled.div`
  opacity: 0;

  &.show {
    opacity: 2;
  }
`

const InstantIcon = styled.div`
  opacity: 2;
`
