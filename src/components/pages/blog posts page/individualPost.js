import { Typography, Box, Container } from '@mui/material';
import ZoeySignature from '../../signature';

const IndividualPost = ({ data }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: { xs: 'flex', sm: 'block' },
        flexDirection: { xs: 'column' },
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: '100%', sm: '50%' },
          float: { xs: 'none', sm: 'left' },
          padding: '0 10px 10px 0',
        }}
        src={data.img}
        alt={data.imgAlt}
      />
      <Box component="span" sx={{ order: { xs: '-1', sm: '1' } }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: 'center', sm: 'right' },
            fontSize: '1.23rem',
          }}
        >
          {data.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
          {data.date}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ textAlign: 'justify', paddingTop: '20px' }}
      >
        {data.post}
        <ZoeySignature />
      </Typography>
    </Container>
  );
};

export default IndividualPost;
