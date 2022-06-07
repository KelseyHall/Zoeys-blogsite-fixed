import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PickAPost = (data) => {
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
      }}
    >
      <Typography variant="h5" sx={{ padding: '0 16px' }}>
        Pick a post
      </Typography>
      <List sx={{ columnCount: { sm: '2', lg: '1' }, flexWrap: 'wrap' }}>
        {data.data.map(({ ...data }) => (
          <ListItem
            key={data.date}
            sx={{
              padding: '0 ',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            <ListItemButton
              component={Link}
              to={`?title=${data.urlLink}&date=${data.date}`}
              sx={{
                flexDirection: { lg: 'column' },
                alignItems: { lg: 'left' },
              }}
            >
              <ListItemText
                primary={data.title}
                sx={{ paddingRight: '10px' }}
              />
              <ListItemText
                sx={{ textAlign: { xs: 'right', lg: 'left' } }}
                primary={data.date}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PickAPost;
