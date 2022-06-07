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
      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '100%', md: '50% 50%', lg: '100%' },
          // columnCount: { xs: '1', sm: '2', lg: '1' },
          // flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        {data.data.map(({ ...data }) => (
          <ListItem
            key={data.date}
            sx={{
              padding: '0 ',
              flexDirection: 'row',
              alignItems: 'stretch',
            }}
          >
            <ListItemButton
              component={Link}
              to={`?title=${data.urlLink}&date=${data.date}`}
              sx={{
                flexDirection: { lg: 'column' },
                alignItems: { lg: 'left' },
                width: '100%',
              }}
            >
              <ListItemText
                sx={{
                  paddingRight: '10px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <Typography variant="body1" sx={{ display: 'inline-block' }}>
                  {data.title}
                </Typography>
              </ListItemText>
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
