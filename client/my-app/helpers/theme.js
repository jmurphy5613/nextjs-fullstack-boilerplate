import { createTheme } from "@material-ui/core"; 

//helper theme object
const theme = createTheme({
    palette: {
        primary: {
          main: '#0a1929'
        },
        secondary: {
          main: '#081c3c',
          contrastText: '#3399ff'
        },
      },
      typography: {
        fontFamily: {
          primary: '"Inter", sans-serif',
        }
      }    
})

export default theme;