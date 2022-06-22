import { Box, Drawer } from '@mui/material';

import Navigation from './navigation';

const NavDrawer = ({ pages, state, toggleDrawer }) => (
  <Box
    onClick={toggleDrawer(false)}
    sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
  >
    <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
      <Navigation pages={pages} toggleDrawer={toggleDrawer} />
    </Drawer>
  </Box>
);

export default NavDrawer;
