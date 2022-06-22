import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import homebanner from '../../img/home-banner.jpeg';

import LatestsBlogPost from './latests posts/latestspost';
const HomePage = ({ blogEntryData }) => {
  return (
    <Container maxWidth="lg">
      <Container
        className="home-banner-img"
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
          clipPath: 'polygon(50% 100%, 4% 0, 96% 0)',
        }}
      ></Box>
      <Typography variant="h1" sx={{ fontSize: { xs: '2.2em', sm: '2.8em' } }}>
        Latest Blog Post
      </Typography>
      <LatestsBlogPost blogEntryData={blogEntryData} />
      <Box sx={{ display: 'flex' }}>
        <Button
          component={Link}
          to={'/blog'}
          variant="contained"
          sx={{ margin: '20px auto' }}
        >
          See all post
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
