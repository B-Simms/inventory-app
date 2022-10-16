import React from 'react';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  // FormControlLabel,
  // FormGroup,
  IconButton,
  MenuItem,
  // Switch,
  Toolbar,
  Typography,
  Menu,
} from '@mui/material';

// export default function Layout() {
function Layout() {
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexgrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          {/* {auth && (
            <div> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pantry
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Account</MenuItem>
          </Menu>
          {/* </div>
          )} */}
        </Toolbar>
      </AppBar>
      {/* {children} */}
    </Box>
  );
}

export default function LayoutProvider() {
  return <Layout />;
  //   <Layout>
  //     {children}
  //   </Layout>
}
