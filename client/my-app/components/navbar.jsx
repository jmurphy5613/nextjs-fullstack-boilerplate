import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    logo: {
        fontFamily: theme.typography.fontFamily.primary,
        marginLeft: theme.spacing(3)
    }
})); 


const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography
                        variant="h3"
                        className={classes.logo}
                    >
                        Logo
                    </Typography>
                    <Menu>
                        <MenuItem>
                            <Typography
                            
                            >
                                About
                            </Typography>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;