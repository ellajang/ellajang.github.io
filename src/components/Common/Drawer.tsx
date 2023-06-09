import React, { useContext, useState } from 'react'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'
import { Collapse } from '@mui/material'
import { ThemeContext } from 'hooks/Theme'

const MenuList: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
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
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="open drawer"
        sx={{ mr: 1.5 }}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <DrawerStyle anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <FirstPageIconStyle fontSize="large" onClick={handleDrawerClose} />
          <ListItem
            button
            onClick={() => handleSubMenuToggle('기초 및 학습 리소스')}
          >
            <ListItemText primary="기초 및 학습 리소스" />
            {subMenuOpen['기초 및 학습 리소스'] ? (
              <ExpandLessRounded />
            ) : (
              <ExpandMoreRounded />
            )}
          </ListItem>
          <Collapse
            in={subMenuOpen['기초 및 학습 리소스']}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="서브 메뉴 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="서브 메뉴 2" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleSubMenuToggle('웹 프론트엔드 핵심 기술')}
          >
            <ListItemText primary="웹 프론트엔드 핵심 기술" />
            {subMenuOpen['웹 프론트엔드 핵심 기술'] ? (
              <ExpandLessRounded />
            ) : (
              <ExpandMoreRounded />
            )}
          </ListItem>
          <Collapse
            in={subMenuOpen['웹 프론트엔드 핵심 기술']}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() => handleSubMenuToggle('웹 프론트엔드 핵심 기술')}
              >
                <ListItemText primary="HTML" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="JAVASCRIPT" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="CSS" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleSubMenuToggle('개발환경')}>
            <ListItemText primary="개발환경" />
            {subMenuOpen['개발환경'] ? (
              <ExpandLessRounded />
            ) : (
              <ExpandMoreRounded />
            )}
          </ListItem>
          <Collapse in={subMenuOpen['개발환경']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => handleSubMenuToggle('개발환경')}>
                <ListItemText primary="REACT" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TypeScript" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleSubMenuToggle('디버깅 및 이슈 해결')}
          >
            <ListItemText primary="디버깅 및 이슈 해결" />
            {subMenuOpen['디버깅 및 이슈 해결'] ? (
              <ExpandLessRounded />
            ) : (
              <ExpandMoreRounded />
            )}
          </ListItem>
          <Collapse
            in={subMenuOpen['디버깅 및 이슈 해결']}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() => handleSubMenuToggle('디버깅 및 이슈 해결')}
              >
                <ListItemText primary="서브 메뉴 3" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="서브 메뉴 4" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemText primary="알고리즘" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="회고록" />
          </ListItem>
        </List>
      </DrawerStyle>
    </>
  )
}

export default MenuList

const DrawerStyle = styled(Drawer)(() => ({
  width: 350,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 380,
    boxSizing: 'border-box',
  },
}))

const FirstPageIconStyle = styled(FirstPageIcon)`
  display: flex;
  margin: 10px 25px 18px 0;
  float: right;
  cursor: pointer;
`
