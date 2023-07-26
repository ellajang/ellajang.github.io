import React, { useContext, useState } from 'react'

import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeContext } from 'hooks/useTheme'
import { Link } from 'gatsby'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { List, ListItem, ListItemText, Popover } from '@mui/material'

import MenuList from './Drawer'
import DarkModeToggle from './DarkModeToggle'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import logo from '../../../static/logoWeb64.png'

interface HeaderProps {
  hideSearch?: boolean
}

const Header: React.FC<HeaderProps> = () => {
  const [, setShowEmptySearchAlert] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <AppBarStyle position="fixed">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <MenuList setAlertOpen={setShowEmptySearchAlert} />
          <TypographyStyle
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <LinkStyle to="/">
              <LogoImage src={logo} alt="Logo" />
              &nbsp; 프론트엔드 : Ella의 개발 일지
            </LinkStyle>
          </TypographyStyle>
          <DarkModeToggle />

          <Portfolio onClick={handleClick}>
            <PersonPinIcon fontSize="large" />
          </Portfolio>
          <StyledPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <List>
              <ListItem
                button
                onClick={() =>
                  window.open('https://ellajang.github.io/ellajang/', '_blank')
                }
              >
                <ListItemText primary="Portfolio" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  window.open('https://github.com/ellajang', '_blank')
                }
              >
                <ListItemText primary="Github" />
              </ListItem>
            </List>
          </StyledPopover>
        </Toolbar>
      </AppBarStyle>
    </>
  )
}

export default Header

const AppBarStyle = styled(AppBar)(() => {
  const appTheme = useContext(ThemeContext)
  return {
    backgroundColor: appTheme.theme === 'light' ? 'white' : '#263238',
  }
})

const TypographyStyle = styled(Typography)(() => {
  const theme = useContext(ThemeContext)
  return {
    color: theme.theme === 'light' ? 'black' : 'white',
  }
})

const LogoImage = styled('img')({
  width: '50px',
  height: '50px',
})
const Portfolio = styled('button')(() => {
  const theme = useContext(ThemeContext)
  return {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    border: 'none',
    display: 'flex',
    height: '40px',
    width: '54px',
    position: 'relative',
    cursor: 'pointer',
    color: theme.theme === 'light' ? 'black' : '#CFD8DB',
    backgroundColor: theme.theme === 'light' ? '#FFFFFF' : '#253237',
    '&:hover': {
      backgroundColor: theme.theme === 'light' ? '#f6ebb0' : '#a98aeda3',
    },
  }
})

const LinkStyle = styled(Link)(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
    textDecoration: 'none',
  }
})
const StyledPopover = styled(Popover)(() => {
  const theme = useContext(ThemeContext)
  return {
    '.MuiPopover-paper': {
      backgroundColor: theme.theme === 'light' ? 'white' : '#263238',
    },
  }
})
