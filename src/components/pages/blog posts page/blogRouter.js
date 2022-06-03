import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import blogEntryData from '../../../contentful';
import IndividualPost from '../blog posts page/individualPost';

const BlogPostRouter = () => {
  return <BlogPost />;
};

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const BlogPost = () => {
  let query = useQuery();
  return <Post title={query.get('title')} date={query.get('date')} />;
};

const sortPostToDisplay = (title, date) => {
  if (title && date) {
    return function (eachPost) {
      const formattedTitle = title.replaceAll('-', ' ');
      return eachPost.title.includes(formattedTitle);
    };
  }
  //returns nothing if url has no params
  return function (eachPost) {
    return;
  };
};
const Post = ({ title, date }) => {
  const blogEntry = blogEntryData.find(sortPostToDisplay(title, date));
  const blogNumber = blogEntryData.indexOf(blogEntry);
  const PrevPost = () => console.log(blogNumber); //`?title=${blogEntry.urlLink}&date=${blogEntry.date}`
  return (
    <Box component="div">
      <Container
        maxWidth="xl"
        sx={{
          borderTop: { xs: '8px solid', lg: 'none' },
          borderBottom: { xs: '8px solid', lg: 'none' },
          borderColor: { xs: 'primary.main' },
          padding: '30px 0',
          overFlow: 'hidden',
        }}
      >
        {/* to display individual post */}
        {blogEntryData.length > 0 ? (
          blogEntry ? (
            //display post depending from pick post menu

            <IndividualPost data={blogEntry} />
          ) : (
            //display latest post as default
            <IndividualPost data={blogEntryData[0]} />
          )
        ) : (
          <Typography variant="body1">trouble loading..</Typography>
        )}
      </Container>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button onClick={PrevPost} color="secondary">{`<-- Prev Post`}</Button>

        <Typography variant="body1">{`${blogNumber + 1}/${
          blogEntryData.length
        }`}</Typography>
        <Button color="secondary">{`Next Post -->`}</Button>
      </Container>
    </Box>
  );
};

export default BlogPostRouter;
