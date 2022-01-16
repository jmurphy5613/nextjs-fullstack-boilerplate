import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
    },
}));

const Layout = ({ children }) => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                {children}
            </div>
        </div>
    )
}

export default Layout;