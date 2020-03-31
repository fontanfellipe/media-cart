import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { faRocket, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../assets/hubbe-logo50.svg';
import Cart from './Cart';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
      marginRight: 0,
      marginLeft: 'auto'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  listSpacing: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
  },

  drawerFontList: {
      fontSize: '40px',
  },
  drawerUlList : {
      fontSize : '8px',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function HeaderDrawerMain() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" noWrap>
                Nova Campanha
            </Typography>
            <div className={classes.toolbarIcon}>
                <NotificationsIcon/>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
        <div className={classes.drawerHeader}>
            <div>
                <Logo/> 
            </div>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            <div className={classes.listSpacing}>
                <Typography  variant="h6">Test</Typography>
            </div>
        </List>
        <Divider />
        <List className={classes.listSpacing}>
          {['Campanhas', 'Resultados'].map((text, index) => (
            <ListItem button key={text} >
                <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={faRocket} />   : <TrendingUpIcon /> }</ListItemIcon>
                <ListItemText 
                    primary={<Typography variant={"body2"}>{text}</Typography>} 
                    className={classes.listItemText}
                />
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List
            className={classes.listSpacing}
        >
            <ListItem >
                <ListItemIcon><FontAwesomeIcon style={{color:'white', fontSize: '8px'}} icon={faCircle} /></ListItemIcon>
                <ListItemText style={{color:'#949494'}} primary={<Typography variant={"body2"}>Campanhas ativas</Typography>} />
            </ListItem>
            <ListItem >
                <ListItemIcon><FontAwesomeIcon style={{color:'#381682', fontSize: '8px'}} icon={faCircle} /></ListItemIcon>
                <ListItemText primary={<Typography variant={"body2"}>Campanhas 2020</Typography>} />
            </ListItem> 
            <ListItem >
                <ListItemIcon><FontAwesomeIcon style={{color:'#fc7e35', fontSize: '8px'}} icon={faCircle} /></ListItemIcon>
                <ListItemText primary={<Typography variant={"body2"}>Geração de leads</Typography>} />
            </ListItem> 
            <ListItem >
                <ListItemIcon><FontAwesomeIcon style={{color:'#767578', fontSize: '8px'}} icon={faCircle} /></ListItemIcon>
                <ListItemText className={classes.drawerFontList} primary={<Typography variant={"body2"}>Campanhas especial</Typography>}/>
            </ListItem>  
            <ListItem >
                <ListItemIcon><FontAwesomeIcon style={{color:'#15cf7b', fontSize: '8px'}} icon={faCircle} /></ListItemIcon>
                <ListItemText primary={<Typography variant={"body2"}>Novo produto</Typography>} />
            </ListItem>    
        </List>
      </Drawer>
      <main 
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Cart/>
      </main>
    </div>
  );
}