import { Container, List, Typography } from '@mui/material';

import PickaPostItem from './pickapost-item';

const PickAPost = ({ blogEntryData }) => {
  return (
    <Container
      sx={{
        border: '1px solid',
        borderColor: 'secondary.light',
        borderRadius: '10px',
        background: '#FFFFFF',
        margin: '20px 0 40px',
        padding: '16px',
        width: { xs: '100%', lg: '30%' },
        maxHeight: { xs: '250px', lg: '400px' },
        overflow: 'auto',
      }}
    >
      <Typography
        variant="h5"
        sx={{ padding: '0 16px', textAlign: { lg: 'center' } }}
      >
        Pick a post
      </Typography>
      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '100%', md: '50% 50%', lg: '100%' },
          alignItems: 'stretch',
        }}
      >
        {blogEntryData.map((data) => (
          <PickaPostItem data={data} key={data.date} />
        ))}
      </List>
    </Container>
  );
};

export default PickAPost;
