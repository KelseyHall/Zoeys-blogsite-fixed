const contentful = require('contentful');
const useContentful = () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_KEY, //space ID
    accessToken: process.env.REACT_APP_ACCESS_TOKEN, //content delivery API - access token
  });

  const sanitizedEntries = (entries) =>
    // pushes each blog post into an array of objects
    entries.items.map((entry) => {
      //makes readable date
      const entryDate = new Date(entry.fields.dateOfPost);
      const day = entryDate.getDate();
      const month = entryDate.getMonth() + 1;
      const year = entryDate.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;

      //removes spaces and replace with dashes for url
      const makeUrlFriendlyName = entry.fields.title.replaceAll(' ', '-');

      //makes array of object with fields of value
      return {
        title: entry.fields.title,
        date: formattedDate,
        img: entry.fields.postMainImage.fields.file.url,
        imgAlt: entry.fields.postMainImage.fields.description,
        post: entry.fields.blogPost,
        urlLink: makeUrlFriendlyName,
      };
    });

  const sortNewestFirst = (a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date2 - date1;
  };

  const getBlogPost = () =>
    client
      .getEntries()
      .then((data) => {
        return sanitizedEntries(data).sort(sortNewestFirst);
      })
      .catch((err) => console.log('retrieving post gone wrong', err));

  return { getBlogPost };
};

export default useContentful;
