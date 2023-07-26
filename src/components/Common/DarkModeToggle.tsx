import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext } from 'hooks/useTheme'
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
    }, 200)

    setTimeout(() => {
      setShowDarkModeIcon(prevShowDarkModeIcon => !prevShowDarkModeIcon)
    }, 200)
  }

  return (
    <>
      <ModeButton onClick={toggleTheme}>
        {isTransitioning ? (
          <TransitionIcon>
            {showDarkModeIcon ? (
              <IconWrapper theme={theme}>
                <DarkModeIcon
                  fontSize="large"
                  sx={{
                    color: theme === 'light' ? '#f7dd4b' : '#f7dd4b',
                  }}
                />
              </IconWrapper>
            ) : (
              <IconWrapper theme={theme}>
                <LightModeIcon
                  fontSize="large"
                  sx={{
                    color: theme === 'light' ? '#f7dd4b' : '#f7dd4b',
                  }}
                />
              </IconWrapper>
            )}
          </TransitionIcon>
        ) : (
          <InstantIcon>
            {theme === 'light' ? (
              <IconWrapper theme={theme}>
                <DarkModeIcon
                  fontSize="large"
                  sx={{
                    color: theme === 'light' ? 'black' : '#FEEA75',
                  }}
                />
              </IconWrapper>
            ) : (
              <IconWrapper theme={theme}>
                <LightModeIcon
                  fontSize="large"
                  sx={{
                    color: theme === 'light' ? 'black' : '#CFD8DB',
                  }}
                />
              </IconWrapper>
            )}
          </InstantIcon>
        )}
      </ModeButton>
    </>
  )
}

export default DarkModeToggle

const ModeButton = styled.div`
  cursor: pointer;
`

const TransitionIcon = styled.div`
  opacity: 0;
`

const InstantIcon = styled.div`
  opacity: 2;
`

const IconWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '40px',
  width: '54px',
  color: '#212121',
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: theme === 'light' ? '#FFFFFF' : '#253237',
  '&:hover': {
    backgroundColor: theme === 'light' ? '#f6ebb0' : '#a98aeda3',
  },
}))
