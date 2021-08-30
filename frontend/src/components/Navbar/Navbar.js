import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import announcement from '../../icons/icon-announcement.png'
import assignment from '../../icons/icon-assignment.png'
import classroom from '../../icons/icon-classroom.png'
import courses from '../../icons/icon-courses.png'
import exam from '../../icons/icon-exam.png'
import routine from '../../icons/icon-routine.png'
import { SwipeableDrawer } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const drawerWidth = 250
// const drawerHeight = 500

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    // height: drawerHeight,
    height: 'auto',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // height: drawerHeight,
    height: 'auto',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    marginLeft: 5,
  },
  user: {
    flexGrow: 1,
    textAlign: 'right',
  },
  icons: {
    height: '50px',
    width: 'auto',
  },
  icontext: {
    padding: '7px',
    marginLeft: '20px',
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'none',
      display: 'block',
    },
  },
}))

export default function Navbar({ Component }) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [state, setState] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState(open)
  }
  const [choto, setChoto] = useState(matches)
  const [Compo, setCompo] = useState(choto === true ? SwipeableDrawer : Drawer)
  const [compoprop, setCompoprop] = useState(
    choto === true
      ? {
          open: state,
          onClose: toggleDrawer(false),
          onOpen: toggleDrawer(true),
          // disableBackdropTransition: true,
        }
      : {
          className: classes.drawer,
          variant: 'permanent',
          classes: {
            paper: classes.drawerPaper,
          },
        }
  )
  const [compodivprop, setCompodivprop] = useState(
    choto === true
      ? {
          className: classes.drawerContainer,
          role: 'presentation',
          onClick: toggleDrawer(false),
          onKeyDown: toggleDrawer(false),
        }
      : {
          className: classes.drawerContainer,
        }
  )

  useEffect(() => {
    setChoto(matches)
    if (matches === true) {
      setCompo(SwipeableDrawer)
      setCompoprop({
        open: state,
        onClose: toggleDrawer(false),
        onOpen: toggleDrawer(true),
      })
      setCompodivprop({
        className: classes.drawerContainer,
        role: 'presentation',
        onClick: toggleDrawer(false),
        onKeyDown: toggleDrawer(false),
      })
    } else {
      setCompo(Drawer)
      setCompoprop({
        className: classes.drawer,
        variant: 'permanent',
        classes: {
          paper: classes.drawerPaper,
        },
      })
      setCompodivprop({
        className: classes.drawerContainer,
      })
    }
    // eslint-disable-next-line
  }, [matches, state])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <MenuIcon onClick={toggleDrawer(true)} />
          <Typography variant='h6' noWrap className={classes.title}>
            Online Class
          </Typography>
          <Typography variant='h6' noWrap className={classes.user}>
            Reshad, 7th sem
          </Typography>
        </Toolbar>
      </AppBar>
      <Compo {...compoprop}>
        <Toolbar />
        <div {...compodivprop}>
          <List>
            {[
              { first: 'Home', second: classroom, third: '/' },
              { first: 'Courses', second: courses, third: '/courses' },
              { first: 'Assignment', second: assignment, third: '/assignment' },
              { first: 'Exams', second: exam, third: '/exams' },
              {
                first: 'Announcement',
                second: announcement,
                third: '/announcement',
              },
              { first: 'Routine', second: routine, third: '/routine' },
            ].map((text, index) => (
              <NavLink
                exact
                to={text.third}
                style={{ textDecoration: 'none' }}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                  textDecoration: 'none',
                }}
              >
                <ListItem button key={index}>
                  <ListItemIcon className={classes.icons}>
                    <img src={text.second} alt='' />
                  </ListItemIcon>
                  <ListItemText
                    primary={text.first}
                    className={classes.icontext}
                  />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Compo>
      <main className={classes.content}>
        <Toolbar />
        <Component />
      </main>
    </div>
  )
}
