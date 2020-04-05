import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {},
    tableToolbar: {
        fontWeight: 700,
        fontSize: 20
    }
});

class WardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wards: [
            {
              name: "Ward 1",
              covid: "true"
            },
            {
              name: "Ward 2",
              covid: "true"
            },
            {
              name: "Ward 3",
              covid: "false"
            },
            {
              name: "Ward 4",
              covid: "true"
            },
            {
              name: "Ward 5",
              covid: "false"
            }
          ]
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={8}>
                <Paper className={classes.root}>
                    <Toolbar className={classes.tableToolbar}>Wards</Toolbar>
                    <TableContainer >
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                <TableCell>Ward</TableCell>
                                <TableCell>COVID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.wards.map((item, i) => {
                                return (
                                    <TableRow key={`row-${i}`}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.covid}</TableCell>
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        )
    }
}

WardsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WardsList);