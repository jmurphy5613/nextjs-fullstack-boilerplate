import '../styles/globals.css';
import Layout from '../components/navbar/layout.tsx';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  ) 
}

export default MyApp
