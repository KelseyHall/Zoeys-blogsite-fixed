import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import NavDrawer from './nav-components/nav-drawer';
import { DesktopLogo, MobileLogo } from './nav-components/header-logo';
import Navigation from './nav-components/navigation';

const pages = [
  { title: 'about me', path: '/aboutme' },
  { title: 'blog posts', path: '/blog' },
];

const Header = () => {
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

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/*mobile nav */}
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

          <NavDrawer pages={pages} state={state} toggleDrawer={toggleDrawer} />

          <MobileLogo />

          {/*desktop nav */}
          <DesktopLogo />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            <Navigation pages={pages} toggleDrawer={toggleDrawer} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
