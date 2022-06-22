import { Typography } from '@mui/material';

export const MobileLogo = () => (
  <Typography
    variant="h6"
    noWrap
    component="div"
    className="headerLogo"
    sx={{
      flexGrow: 1,
      display: { xs: 'flex', sm: 'none' },
      flexDirection: 'column',
    }}
  >
    <a id="logo" href="/" rel="home">
      <span className="mainLogo">Zoey's Corner</span>
      <span className="logoSubline">day in the life</span>
    </a>
  </Typography>
);

export const DesktopLogo = () => (
  <Typography
    variant="h6"
    noWrap
    component="div"
    className="headerLogo"
    sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
  >
    <a id="logo" href="/" rel="home">
      <span className="mainLogo">Zoey's Corner</span>
      <span className="logoSubline">day in the life</span>
    </a>
  </Typography>
);
