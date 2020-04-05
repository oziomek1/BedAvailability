import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import BedsList from '../bedslist/BedsList';
import * as covidStatus from '../../data/covidStatus';
import './WardInfo.css';

const styles = theme => ({
    root: {
        display: 'inline-block',
        marginTop: 20,
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

class WardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wards: [
                {
                    wardName: "Ward 1",
                    wardLocation: 'Building G, Floor 1, Corridor 2',
                    wardTelephone: "+45 38 68 38 68",
                    wardCovid: covidStatus.covidStatus.COVID
                },
                {
                    wardName: "Ward 2",
                    wardLocation: 'Building G, Floor 3, Corridor 1',
                    wardTelephone: "+45 38 68 38 64",
                    wardCovid: covidStatus.covidStatus.NOTCOVID
                },
                {
                    wardName: "Ward 3",
                    wardLocation: 'Building A, Floor 1, Corridor 1',
                    wardTelephone: "+45 38 68 38 65",
                    wardCovid: covidStatus.covidStatus.NOTCOVID
                },
                {
                    wardName: "Ward 4",
                    wardLocation: 'Building B, Floor 5, Corridor 2',
                    wardTelephone: "+45 38 68 38 66",
                    wardCovid: covidStatus.covidStatus.COVIDREADY
                },
                {
                    wardName: "Ward 5",
                    wardLocation: 'Building C, Floor 1, Corridor 3',
                    wardTelephone: "+45 38 68 38 67",
                    wardCovid: covidStatus.covidStatus.COVID
                }
              ]
        };
    }
    render() {
        const { classes } = this.props;
        const ward = this.state.wards[this.props.wardId - 1];
        if (ward) {
            return (
                <div className={classes.root}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h4" className={classes.title} gutterBottom>
                                        Name: {ward.wardName} 
                                    </Typography>
                                    <Typography variant="body2" className={classes.text} component="p">
                                        Location: <strong>{ward.wardLocation}</strong>
                                    </Typography>
                                    <br/>
                                    <Typography variant="body2" className={classes.text} component="p">
                                        Telephone: <strong>{ward.wardTelephone}</strong>
                                    </Typography>
                                    <br/>
                                    <Typography variant="body2" className={classes.text} style={{ color: ward.wardCovid.color }} component="p">
                                        Covid status: <strong>{ward.wardCovid.description}</strong>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="secondary" size="small" href="https://www.herlevhospital.dk/">
                                        Hospital homepage
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <BedsList wardId={this.props.wardId - 1}></BedsList>
                    </Grid>
                </div>
            )
        } else {
            return ( 
                <div></div>
            )
        }
    }

}

WardInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WardInfo);