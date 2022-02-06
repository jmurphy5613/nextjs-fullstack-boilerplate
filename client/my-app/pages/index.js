import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: '2.5rem',
  },

}));


export default function Home() {

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" className={classes.title}>
          The online test platform you need for the
          {
            <Typed 
              strings={[
                'SAT',
                'ACT',
                'LSAT',
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
            />
          }
        </Typography>
      </Container>
    </>
  )
}
