import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import './HospitalInfo.css';

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

class HospitalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalName: 'Herlev Hospital',
            hospitalAddress: 'Borgmester Ib Juuls Vej 1, 2730 Herlev',
            hospitalTelephone: "+45 38 68 38 68"
        };
    }
    
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h4" className={classes.title} gutterBottom>
                            {this.state.hospitalName}
                        </Typography>
                        <Typography variant="body2" className={classes.text} component="p">
                            Address: <strong>{this.state.hospitalAddress}</strong>
                        </Typography>
                        <br/>
                        <Typography variant="body2" className={classes.text} component="p">
                            Telephone: <strong>{this.state.hospitalTelephone}</strong>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" size="small" href="https://www.herlevhospital.dk/">
                            Hospital homepage
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

}

HospitalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HospitalInfo);