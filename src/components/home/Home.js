import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import HospitalInfo from '../hospitalinfo/HospitalInfo';
import WardsList from '../wardslist/WardsList';
import './Home.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginBottom: 40,
    }
  });

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify="center" spacing={4}>
                    <HospitalInfo></HospitalInfo>
                    <WardsList></WardsList>
                </Grid>
            </div>
        )
    }

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);