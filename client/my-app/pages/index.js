import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontWeight: '500',
  }
});


export default function Home() {
  return (
    <Container maxWidth="md" className={styles.container}>
      <Typography variant="h2" component="h1" className={styles.title}>
        The online test platform you need for the
      </Typography>
    </Container>
  )
}
