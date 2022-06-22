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
import { Container } from '@mui/material';

function App() {
  const [blogEntryData, setBlogEntryData] = useState([]);
  const { getBlogPost } = useContentful();

  useEffect(() => {
    getBlogPost().then((response) => setBlogEntryData(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        type="div"
        className="App"
        sx={{ minHeight: '93vh', padding: '0' }}
      >
        <BrowserRouter>
          <Header />
          <RouterSwitch blogEntryData={blogEntryData} />
        </BrowserRouter>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
