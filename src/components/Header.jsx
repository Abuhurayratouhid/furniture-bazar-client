import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
// import Link from '@mui/material/Link';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

const Header = (props) => {
  const { user, userLogOut } = useContext(AuthContext)
  // console.log(user)

  // handleLogOut
  const handleLogOut=()=>{
    // console.log('log out')
    userLogOut()
    .then(()=>{})
    .catch(err => console.log(err))
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link style={{ textDecoration: 'none' }} to='/'>I-Bazar</Link>
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Link
          style={{ color: 'black', textDecoration: 'none', }}
          to='/about'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText >About </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          style={{ color: 'black', textDecoration: 'none', }}
          to='/contact'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText >Contact </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>


        {user?.uid ? <Link
          style={{ color: 'black', textDecoration: 'none', }}
          >
          <ListItem onClick={handleLogOut}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText >Log out </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link> : <Link
          style={{ color: 'black', textDecoration: 'none', }}
          to='/signUp'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText >Sign Up </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>}


      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography

            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>I-Bazar</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <Link style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }} to='/about'>About</Link>
            <Link style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }} to='/contact'>Contact</Link>
            {user?.uid ? 
            <p onClick={handleLogOut} style={{ color: 'white', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }} >Log Out</p>
            :
            <Link style={{ color: 'white', textDecoration: 'none' }} to='/signUp'>Sign Up</Link>}
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box> */}
    </Box>
  );

};



export default Header;