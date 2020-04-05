import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
      marginBottom: 20,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
        "&:hover": {
            color: "#dedede"
        }
    }
  }));

function Header(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h4"
                    align="left"
                    noWrap
                    className={classes.title}>
                    <Link
                        className={classes.titleLink} 
                        underline="none"
                        color="inherit" 
                        href="/">
                        {title}
                    </Link>
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    href="/info"
                    startIcon={<InfoIcon />}
                >
                    Info
                </Button>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header;