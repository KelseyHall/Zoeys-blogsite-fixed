import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Homebanner from './home-banner';

import LatestsBlogPost from './latests posts/latestspost';
const HomePage = ({ blogEntryData }) => {
  return (
    <Container maxWidth="lg">
      <Homebanner />

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
