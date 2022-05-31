import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#783e23',
      light: '#bf6336',
      dark: '#523a28',
      contrastText: '#edf1f2',
    },
    secondary: {
      main: '#154c4b',
      dark: '#154c4b',
      contrastText: '#edf1f2',
      light: '#228280',
    },
    background: {
      default: '#edf1f2',
      defaultLowOpacity: '#edf1f270',
      paper: '#ffffff',
    },
    text: {
      primary: '#150f0a',
      secondary: '#edf1f2',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '2.8em',
      textAlign: 'center',
      ':after': {
        fontFamily: 'Arial',
        content: "'•'",
        fontSize: '1.3em',
        lineHeight: '1',
        marginLeft: '20px',
        color: '#bf6336',
      },
      ':before': {
        fontFamily: 'Arial',
        content: "'•'",
        fontSize: '1.3em',
        lineHeight: '1',
        marginRight: '20px',
        color: '#bf6336',
      },
    },
    h2: {
      fontFamily: "'Dancing Script', cursive",
    },
    h3: {
      fontFamily: "'Ubuntu', sans-serif",
    },

    subtitle1: {
      fontFamily: "'Prompt', sans-serif",
    },
    subtitle2: {
      fontFamily: "'Ubuntu', sans-serif",
    },
    body1: {
      fontFamily: "'Prompt', sans-serif",
    },
    signature: {
      fontFamily: "'BerkShire Swash', cursive",
      fontSize: '1.5em',
      ':before': {
        fontFamily: 'Arial',
        content: "'•'",
        fontSize: '1.3em',
        lineHeight: '1',
        marginRight: '10px',
        color: '#bf6336',
      },
    },
  },
});

export default theme;
