import * as React from 'react';
import LatestBlogPostComponent from './latestBlogPostComponent';
import { Container } from '@mui/material';

const LatestsBlogPost = ({ blogEntryData }) => {
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
      {blogEntryData.slice(0, 2).map((data) => {
        return <LatestBlogPostComponent data={data} key={data.date} />;
      })}
    </Container>
  );
};

export default LatestsBlogPost;
