import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import ListSubheader from "@material-ui/core/ListSubHeader"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  nav: {
    textDecoration: "none",
    color: "secondary"
  }
}))

const MenuBarApp = props => {
  const classes = useStyles()
  const { container } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <NavLink
        to="/"
        exact
        className={classes.nav}
        onClick={handleDrawerToggle}
      >
        <MenuItem>Home</MenuItem>
      </NavLink>
      <NavLink to="/add" className={classes.nav} onClick={handleDrawerToggle}>
        <MenuItem>New Poll</MenuItem>
      </NavLink>
      <NavLink
        to="/leaderboard"
        className={classes.nav}
        onClick={handleDrawerToggle}
      >
        <MenuItem>Leader Board</MenuItem>
      </NavLink>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography align="center" variant="h6" className={classes.title}>
            Would You Rather?
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{ height: 70 }} />

      <nav className={classes.drawer} aria-label="Mailbox folders">
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <MenuList
              subheader={
                <ListSubheader>
                  Would You Rather?
                  <IconButton onClick={handleDrawerToggle}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListSubheader>
              }
            >
              {drawer}
            </MenuList>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent">
            <MenuList
              subheader={<ListSubheader>Would You Rather?</ListSubheader>}
            >
              {drawer}
            </MenuList>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default MenuBarApp
