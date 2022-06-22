import { MenuItem, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = ({ pages, toggleDrawer }) =>
  pages.map((page) => (
    <MenuItem key={page.title}>
      <NavLink to={page.path}>
        <Button
          onClick={toggleDrawer(false)}
          className="nav-buttons"
          sx={{
            color: 'secondary.main',
          }}
        >
          {page.title}
        </Button>
      </NavLink>
    </MenuItem>
  ));

export default Navigation;
