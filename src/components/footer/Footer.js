import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../data/colors';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: colors.darkGreen,
        padding: theme.spacing(4, 0),
        color: '#ffffff',
        textAlign: 'center'
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <h4>BedAvail @ 2020</h4>
        </footer>
    )
}

export default Footer;