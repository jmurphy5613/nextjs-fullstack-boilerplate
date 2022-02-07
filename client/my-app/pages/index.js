import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: '4.5rem',
    padding: '30% 0 0 0',
    fontFamily: '"Inter", sans-serif',
    fontWeight: '600',
  },
  innerTitle: {
    color: theme.palette.secondary.contrastText,
    fontWeight: '600',
  }

}));


export default function Home() {

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" className={classes.title}>
          The online<br/> <span className={classes.innerTitle}> test platform <br/> </span> you need for <br/> {`the `}  
            <span className={classes.innerTitle}>
              
              <Typed 
                strings={[
                  'SAT',
                  'ACT',
                  'LSAT',
                ]}
                typeSpeed={90}
                backSpeed={30}
                loop
              />
            
            </span>
        </Typography>
      </Container>
    </>
  )
}
