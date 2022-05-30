const contentful = require('contentful');
const tempSpace = 'hger3rgtt3';
const tempAccessToken = 'hsfsf8r39wr42hjgdsgfusg8t3';
const client = contentful.createClient({
  space: tempSpace, //space ID
  accessToken: tempAccessToken, //content delivery API - access token
});
let rawBlogEntryData = [];
let blogEntryData = rawBlogEntryData.sort((a, b) => b.date - a.date);

client
  .getEntries()
  .then(function (entries) {
    // pushes each blog post into an array of objects
    entries.items.map((entry) => {
      // console.log(entry);
      // if (entry.fields) {

      //makes readable date
      const entryDate = new Date(entry.fields.dateOfPost);
      const day = entryDate.getDate();
      const month = entryDate.getMonth() + 1;
      const year = entryDate.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;

      //removes spaces and replace with dashes for url
      const makeUrlFriendlyName = entry.fields.title.replaceAll(' ', '-');

      //makes array of object with fields of value
      return rawBlogEntryData.unshift({
        title: entry.fields.title,
        date: formattedDate,
        img: entry.fields.postMainImage.fields.file.url,
        imgAlt: entry.fields.postMainImage.fields.description,
        post: entry.fields.blogPost,
        urlLink: makeUrlFriendlyName,
      });
      // }
      // return;
    });
  })
  .catch((err) => console.log('retrieving post gone wrong', err));

export default blogEntryData;
