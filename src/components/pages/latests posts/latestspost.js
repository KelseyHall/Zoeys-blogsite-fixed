import * as React from 'react';
import LatestBlogPostComponent from './latestBlogPostComponent';
import blogEntryData from '../../../contentful';
import { Container } from '@mui/material';

const LatestsBlogPost = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { md: 'space-around' },
        paddingBottom: '20px',
      }}
    >
      {/*Limit map to show only 2 */}
      {blogEntryData.slice(0, 2).map(({ ...data }, index) => {
        // console.log(index);
        return (
          <LatestBlogPostComponent
            date={data.date}
            img={data.img}
            imgAlt={data.imgAlt}
            post={data.post}
            title={data.title}
            key={data.date}
            index={index}
          />
        );
      })}
    </Container>
  );
};

export default LatestsBlogPost;
