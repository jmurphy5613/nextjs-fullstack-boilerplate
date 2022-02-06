import Navbar from "./navbar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100vh',
    },
}));


const Layout = ({ children }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            <div className="container">{children}</div>
        </div>
    )
}

export default Layout;