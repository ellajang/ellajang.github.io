import React, { useContext } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import MenuList from './Drawer'
import DarkModeToggle from './DarkModeToggle'
import { ThemeContext } from 'hooks/useTheme'
import { Link } from 'gatsby'

const Header: React.FC = () => {
  return (
    <>
      <AppBarStyle position="fixed">
        <Toolbar>
          <MenuList />
          <TypographyStyle
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <LinkStyle to="/">프론트엔드 기술 블로그</LinkStyle>
          </TypographyStyle>

          <DarkModeToggle />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="검색어를 입력하세요."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
