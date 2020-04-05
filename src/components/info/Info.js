import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import HospitalInfo from '../hospitalinfo/HospitalInfo';
import { withStyles } from '@material-ui/styles';
import './Info.css';

const styles = theme => ({
    root: {
        display: 'inline-block',
        marginTop: theme.spacing * 3,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 24,
    },
    text: {
        fontSize: 18,
        fontWeight: 700
    }
  });

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalName: 'Helev Hospital',
            hospitalAddress: 'Borgmester Ib Juuls Vej 1, 2730 Herlev',
            hospitalTelephone: "+45 38 68 38 68",
            hospitalFreeBeds: 12,
            hospitalTakenBeds: 74,
        };
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" spacing={6}>
                <HospitalInfo></HospitalInfo>
                <Grid item xs={12} sm={4} md={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h4" className={classes.title} gutterBottom>
                                Beds status
                            </Typography>
                            <Typography variant="body2" className={classes.text} component="p">
                                Free: <strong>{this.state.hospitalFreeBeds}</strong>
                            </Typography>
                            <br/>
                            <Typography variant="body2" className={classes.text} component="p">
                                Taken: <strong>{this.state.hospitalTakenBeds}</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }

}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);