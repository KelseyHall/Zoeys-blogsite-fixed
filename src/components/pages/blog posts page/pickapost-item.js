import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PickaPostItem = ({ data }) => (
  <ListItem
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
        width: '100%',
        alignItems: { lg: 'flex-start' },
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      <ListItemText
        sx={{
          marginRight: '10px',
          whiteSpace: { xs: 'nowrap', lg: 'normal' },
          width: { xs: '70%', lg: '100%' },
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
);

export default PickaPostItem;
