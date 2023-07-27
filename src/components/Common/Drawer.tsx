import React, { useContext, useRef, useState } from 'react'

import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'
import {
  Collapse,
  InputBase,
  ListItemSecondaryAction,
  Toolbar,
  Tooltip,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import HomeIcon from '@mui/icons-material/Home'
import { ThemeContext } from 'hooks/useTheme'
import { Link, navigate } from 'gatsby'
import SearchIcon from '@mui/icons-material/Search'

interface MenuListProps {
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuList: React.FC<MenuListProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [alertOpen, setAlertOpen] = useState<boolean>(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const [subMenuOpen, setSubMenuOpen] = useState<{
    [key: string]: boolean
  }>({
    개발환경: false,
    '기초 및 학습 리소스': false,
    '웹 프론트엔드 핵심 기술': false,
    '디버깅 및 이슈 해결': false,
  })

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleSubMenuToggle = (category: string) => {
    setSubMenuOpen(prevMenuOpen => ({
      ...prevMenuOpen,
      [category]: !prevMenuOpen[category],
    }))
  }
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const searchTermValue: string = searchInputRef.current?.value || ''
    if (!searchTermValue.trim()) {
      // Handle empty search term.
      setAlertOpen(true)
      return
    }
    void navigate(`/search?term=${encodeURIComponent(searchTermValue)}`)
  }
  return (
    <>
      <IconButtonStyle
        size="large"
        edge="start"
        aria-label="open drawer"
        sx={{ mr: 1.5 }}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButtonStyle>
      <DrawerStyle anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <IconContainer>
          <Link to="/">
            <HomeIconStyle fontSize="large" />
          </Link>
          <FirstPageIconStyle fontSize="large" onClick={handleDrawerClose} />
        </IconContainer>
        <Toolbar>
          <Tooltip
            open={alertOpen}
            title="검색어를 입력해 주세요 :)"
            onClose={() => setAlertOpen(false)}
          >
            <Search>
              <StyledInputBase
                placeholder="검색어를 입력하세요."
                inputProps={{ 'aria-label': 'search', ref: searchInputRef }}
              />
              <IconButtonStyle type="submit" onClick={handleSearchSubmit}>
                <SearchIcon />
              </IconButtonStyle>
            </Search>
          </Tooltip>
        </Toolbar>
        <List>
          <ListItem>
            <LinkStyle to="/basicResource">
              <ListItemText
                primary="기초 및 학습 리소스"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
            <ListItemSecondaryAction>
              <IconButtonStyle
                edge="end"
                aria-label="comments"
                onClick={() => handleSubMenuToggle('기초 및 학습 리소스')}
              >
                {subMenuOpen['기초 및 학습 리소스'] ? (
                  <ExpandLessRounded />
                ) : (
                  <ExpandMoreRounded />
                )}
              </IconButtonStyle>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse
            in={subMenuOpen['기초 및 학습 리소스']}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem>
                <LinkStyle to="/basicResource/DB">
                  <ArrowRightIcon />
                  <ListItemText primary="데이터베이스" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/basicResource/OS">
                  <ArrowRightIcon />
                  <ListItemText primary="운영체제" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/basicResource/DS">
                  <ArrowRightIcon />
                  <ListItemText primary="자료구조" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/basicResource/CS">
                  <ArrowRightIcon />
                  <ListItemText primary="컴퓨터구조" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/basicResource/NETWORK">
                  <ArrowRightIcon />
                  <ListItemText primary="네트워크" />
                </LinkStyle>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <LinkStyle to="/frontendCoreTech">
              <ListItemText
                primary="웹 프론트엔드 핵심 기술"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
            <ListItemSecondaryAction>
              <IconButtonStyle
                edge="end"
                aria-label="comments"
                onClick={() => handleSubMenuToggle('웹 프론트엔드 핵심 기술')}
              >
                {subMenuOpen['웹 프론트엔드 핵심 기술'] ? (
                  <ExpandLessRounded />
                ) : (
                  <ExpandMoreRounded />
                )}
              </IconButtonStyle>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse
            in={subMenuOpen['웹 프론트엔드 핵심 기술']}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleSubMenuToggle('웹 프론트엔드 핵심 기술')}
              >
                <LinkStyle to="/frontendCoreTech/HTML">
                  <ArrowRightIcon />
                  <ListItemText primary="HTML" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/frontendCoreTech/JAVASCRIPT">
                  <ArrowRightIcon />
                  <ListItemText primary="JAVASCRIPT" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/frontendCoreTech/CSS">
                  <ArrowRightIcon />
                  <ListItemText primary="CSS" />
                </LinkStyle>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <LinkStyle to="/devEnv">
              <ListItemText
                primary="개발환경"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
            <ListItemSecondaryAction>
              <IconButtonStyle
                edge="end"
                aria-label="comments"
                onClick={() => handleSubMenuToggle('개발환경')}
              >
                {subMenuOpen['개발환경'] ? (
                  <ExpandLessRounded />
                ) : (
                  <ExpandMoreRounded />
                )}
              </IconButtonStyle>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse in={subMenuOpen['개발환경']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <LinkStyle to="/devEnv/REACT">
                  <ArrowRightIcon />
                  <ListItemText primary="REACT" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/devEnv/NEXT">
                  <ArrowRightIcon />
                  <ListItemText primary="NEXT" />
                </LinkStyle>
              </ListItem>
              <ListItem>
                <LinkStyle to="/devEnv/TYPESCRIPT">
                  <ArrowRightIcon />
                  <ListItemText primary="TypeScript" />
                </LinkStyle>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <LinkStyle to="/debugging">
              <ListItemText
                primary="디버깅 및 이슈 해결"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
          </ListItem>
          <ListItem>
            <LinkStyle to="/algorithm">
              <ListItemText
                primary="알고리즘"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
          </ListItem>
          <ListItem>
            <LinkStyle to="/memoir">
              <ListItemText
                primary="회고록"
                primaryTypographyProps={{ style: { fontSize: '20px' } }}
              />
            </LinkStyle>
          </ListItem>
        </List>
      </DrawerStyle>
    </>
  )
}

export default MenuList

const IconButtonStyle = styled(IconButton)(() => {
  const theme = useContext(ThemeContext)
  return {
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
  }
})

const DrawerStyle = styled(Drawer)(() => {
  const theme = useContext(ThemeContext)
  return {
    width: 350,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 380,
      boxSizing: 'border-box',
      backgroundColor: theme.theme === 'dark' ? '#263238' : 'white',
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
    '&:hover': {
      textDecoration: 'underline',
    },
  }
})

const FirstPageIconStyle = styled(FirstPageIcon)(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    margin: '25px 20px 20px 0px',
    float: 'right',
    cursor: 'pointer',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
  }
})

const HomeIconStyle = styled(HomeIcon)(() => {
  const theme = useContext(ThemeContext)
  return {
    display: 'flex',
    margin: '25px 0px 0px 20px',
    float: 'left',
    cursor: 'pointer',
    color: theme.theme === 'dark' ? '#cfd8dc' : 'black',
  }
})
const IconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.theme === 'dark' ? '#4f6067' : '#e9e8e8',
    '&:hover': {
      backgroundColor: theme.theme === 'dark' ? '#77858b' : '#E1E1E1',
    },
  }
})

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 12, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    width: '100%',
  },
}))
