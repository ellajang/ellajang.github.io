import React, { useContext, useRef, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import logo from '../../../static/logoWeb64.png'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Alert, Snackbar, SnackbarOrigin, Stack } from '@mui/material'
import MenuList from './Drawer'
import DarkModeToggle from './DarkModeToggle'
import { ThemeContext } from 'hooks/useTheme'
import { Link, navigate } from 'gatsby'

interface HeaderProps {
  hideSearch?: boolean
}

const Header: React.FC<HeaderProps> = ({ hideSearch }) => {
  const [, setSearchTerm] = useState('')
  const [showEmptySearchAlert, setShowEmptySearchAlert] = useState(false)
  const [open, setOpen] = useState(false)
  const [snackbarPosition] = useState<SnackbarOrigin>({
    vertical: 'top',
    horizontal: 'center',
  })
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const searchTermValue = searchInputRef.current?.value || ''
    setSearchTerm(searchTermValue)

    if (!searchTermValue.trim()) {
      setShowEmptySearchAlert(true)
      setOpen(true)
      return
    }

    navigate(`/search?term=${encodeURIComponent(searchTermValue)}`)
  }

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <AppBarStyle position="fixed">
        {showEmptySearchAlert && (
          <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
            anchorOrigin={snackbarPosition}
          >
            <Stack sx={{ width: '100' }} spacing={12}>
              <Alert severity="warning">검색어를 입력해 주세요 :)</Alert>
            </Stack>
          </Snackbar>
        )}
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <MenuList />
          <TypographyStyle
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <LinkStyle to="/">
              <img src={logo} alt="Logo" />
              &nbsp; 프론트엔드 : Ella의 개발 일지
            </LinkStyle>
          </TypographyStyle>

          <DarkModeToggle />
          {!hideSearch && (
            <Search>
              <StyledInputBase
                placeholder="검색어를 입력하세요."
                inputProps={{ 'aria-label': 'search' }}
                inputRef={searchInputRef}
              />
              <SearchIconWrapper type="submit" onClick={handleSearchSubmit}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          )}
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#212121',
  border: '1px solid #b0bec5',
  borderRadius: '10px',
  backgroundColor: alpha(theme.palette.grey[400], 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[400], 0.15),
    border: '1px solid #b0bec5',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  cursor: 'pointer',
  border: 'none',
  borderRadius: '10px',
  background: '#7d64b1',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}))
const LinkStyle = styled(Link)(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
    textDecoration: 'none',
  }
})
