import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const pages = [
  { title: 'about me', path: '/about' },
  { title: 'blog posts', path: '/blog' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center" color="secondary.main">
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
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
                  onClick={handleCloseNavMenu}
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
