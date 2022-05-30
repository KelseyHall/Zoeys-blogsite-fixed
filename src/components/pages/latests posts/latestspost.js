import * as React from 'react';
import LatestBlogPostComponent from './latestBlogPostComponent';
import blogEntryData from '../../../contentful';
import { Container } from '@mui/material';

const LatestsBlogPost = () => {
  //   console.log(blogEntryData.indexOf());
  //   const borderColour = () =>{
  //       if(blogEntryData.indexOf())
  //   }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { md: 'space-around' },
      }}
    >
      {blogEntryData.map(({ ...data }, index) => {
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
