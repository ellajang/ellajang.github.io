import * as React from 'react'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

const MenuList: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 1.5 }}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <DrawerStyle anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 4" />
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
    width: 400,
    boxSizing: 'border-box',
  },
}))
