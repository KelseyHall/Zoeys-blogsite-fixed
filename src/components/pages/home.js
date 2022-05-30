import { Container, Typography } from '@mui/material';
import homebanner from '../../img/home-banner.jpeg';

import LatestsBlogPost from './latests posts/latestspost';
const HomePage = () => {
  console.log(process.env);
  return (
    <Container maxWidth="xl">
      <Container
        className="home-banner-img"
        sx={{
          overflow: 'hidden',
          maxHeight: { xs: '300px', md: '600px' },
          display: 'block',
        }}
      >
        <img
          src={homebanner}
          style={{
            objectPosition: 'left 25%',
            width: '100%',
          }}
          alt="Zoey who is a Cockapoo puppy, looking at the camera sticking her tongue out while sitting on a bridge"
        />
      </Container>
      {/*<div class="triangle-down"></div>
  <div class="upside-down-triangle"></div>*/}
      <Typography variant="h1">Latest Blog Post</Typography>
      <LatestsBlogPost />
    </Container>
  );
};

export default HomePage;
