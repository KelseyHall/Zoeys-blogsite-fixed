import homebanner from '../../img/home-banner.jpeg';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
const Homebanner = () => (
  <Box sx={{ padding: '0' }}>
    <Container
      id="home-banner-img"
      sx={{
        overflow: 'hidden',
        maxHeight: { xs: '250px', sm: '300px', md: '500px' },
        minHeight: '200px',
        display: 'block',
        padding: '0',
      }}
    >
      <Box
        component="img"
        src={homebanner}
        sx={{
          width: '100%',
          position: 'relative',
          top: { sm: '-250px', md: '-300px' },
          bottom: { xs: '60px' },
        }}
        alt="Zoey who is a Cockapoo puppy, looking at the camera sticking her tongue out while sitting on a bridge"
      />
    </Container>
    <Box
      sx={{
        background: 'var(--accents-banners)',
        height: '81px',
        width: '100%',
        clipPath: 'polygon(50% 100%, 0% 0, 100% 0)',
      }}
    ></Box>
  </Box>
);

export default Homebanner;
