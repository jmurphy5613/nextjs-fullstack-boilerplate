import '../styles/globals.css';
import Layout from '../components/navbar/layout.tsx';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createTheme } from '@material-ui/core/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0a1929'
    },
    secondary: {
      main: '#081c3c',
    },
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  ) 
}

export default MyApp
