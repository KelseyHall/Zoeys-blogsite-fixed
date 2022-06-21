import { ThemeProvider } from '@emotion/react';
// import { Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import theme from './styles/theme';
import './styles/globalStyles.css';
import RouterSwitch from './components/router/Router';
import Footer from './components/footer';

import { useEffect, useState } from 'react';
import useContentful from './contentful';

function App() {
  const [blogEntryData, setBlogEntryData] = useState([]);
  const { getBlogPost } = useContentful();

  useEffect(() => {
    getBlogPost().then((response) => setBlogEntryData(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <RouterSwitch blogEntryData={blogEntryData} />
        </BrowserRouter>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
