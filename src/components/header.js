import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  Button,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const pages = [
  { title: 'about me', path: '/aboutme' },
  { title: 'blog posts', path: '/blog' },
];

const Header = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="headerLogo"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <a id="logo" href="/" rel="home">
              <span className="mainLogo">Zoey's Corner</span>
              <span className="logoSubline">day in the life</span>
            </a>
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="primary"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            onClick={toggleDrawer(false)}
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
          >
            {/*<Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >*/}
            <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={toggleDrawer(false)}>
                  <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center" color="secondary.main">
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Drawer>
            {/*</Menu>*/}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="headerLogo"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <a id="logo" href="/" rel="home">
              <span className="mainLogo">Zoey's Corner</span>
              <span className="logoSubline">day in the life</span>
            </a>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={page.path}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  onClick={toggleDrawer(false)}
                  className="nav-buttons"
                  sx={{
                    my: 2,
                    color: 'secondary.main',
                    display: 'block',
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
