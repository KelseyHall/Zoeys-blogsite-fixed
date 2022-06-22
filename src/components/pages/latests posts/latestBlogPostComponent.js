import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const indexOddorEven = (num) => num % 2 === 0;

const LatestBlogPostComponent = ({ data }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: { md: '42%' },
        border: '1px solid',
        borderRadius: '10px',
        borderColor: indexOddorEven(data.index)
          ? 'primary.light'
          : 'secondary.light',
        margin: '13px 0',
        padding: { xs: '10px', sm: '20px', md: '10px' },
      }}
    >
      <CardActionArea
        component={Link}
        to={`/blog?title=${data.title.replaceAll(' ', '-')}&date=${data.date}`}
        sx={{
          display: { xs: 'flex', sm: 'grid', md: 'flex' },
          gridTemplateColumns: { sm: 'repeat(8, 1fr)' },
          gridTemplateRows: { sm: 'repeat(24, 1fr)' },
          flexDirection: {
            xs: 'column',
            sm: indexOddorEven(data.index) ? 'row-reverse' : 'row',
            md: 'column',
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: '250px' },
            gridRow: { sm: '1/  25' },
            gridColumn: { sm: indexOddorEven(data.index) ? '1/6' : '4/9' },
            objectPosition: 'top',
          }}
          image={data.img}
          alt={data.imgAlt}
        />
        <CardContent
          className="blog-card-title"
          sx={{
            top: '60%',
            width: { xs: '100%', sm: '90%', md: '100%' },
            backgroundColor: {
              xs: 'background.defaultLowOpacity',
              sm: 'background.default',
              md: 'background.defaultLowOpacity',
            },
            gridRow: { sm: '3/  23' },
            gridColumn: { sm: indexOddorEven(data.index) ? '5/9' : '1/5' },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '96%',
            }}
          >
            {data.title}
          </Typography>
          <Typography variant="subtitle1">{data.date}</Typography>

          <Typography variant="body2" color="text.primary">
            {
              `${data.post.substring(0, 250)}...` //cropped full post to blurb
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LatestBlogPostComponent;
