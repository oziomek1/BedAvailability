import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
import EditIcon from '@material-ui/icons/Edit';
import * as colors from '../../data/colors';
import * as covidStatus from '../../data/covidStatus';

const styles = theme => ({
    root: {
        marginTop: theme.spacing * 3,
        overflowX: "auto"
    },
    head: {
        backgroundColor: "primary",
    },
    table: {},
    tableToolbar: {
        fontWeight: 700,
        fontSize: 24
    }
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: colors.darkBlue,
        color: theme.palette.common.white,
        fontSize: 18,
        fontWeight: 700
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class WardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          wards: [
            {
              name: "Ward 1",
              covid: covidStatus.covidStatus.COVID
            },
            {
              name: "Ward 2",
              covid: covidStatus.covidStatus.NOTCOVID
            },
            {
              name: "Ward 3",
              covid: covidStatus.covidStatus.NOTCOVID
            },
            {
              name: "Ward 4",
              covid: covidStatus.covidStatus.COVIDREADY
            },
            {
              name: "Ward 5",
              covid: covidStatus.covidStatus.COVID
            }
          ]
        };
    }

    updateWard(i) {
        // TODO
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={8}>
                <Paper className={classes.root}>
                    <Toolbar className={classes.tableToolbar}>Hospital wards</Toolbar>
                    <TableContainer >
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Ward</StyledTableCell>
                                    <StyledTableCell>COVID</StyledTableCell>
                                    <StyledTableCell align="right">Update Ward</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.wards.map((item, i) => {
                                    console.log(i);
                                    return (
                                        <TableRow 
                                            style={{ backgroundColor: item.covid.color }} 
                                            component={Link} to={`/ward/${i + 1}`}
                                            key={`row-${i}`}
                                        >
                                            <StyledTableCell style={{ width: 200 }}>{item.name}</StyledTableCell>
                                            <StyledTableCell style={{ width: 300 }}>{item.covid.description}</StyledTableCell>
                                            <TableCell align="right">
                                                <Button
                                                    onClick={this.updateWard.bind(this, i)}
                                                    variant="outlined"
                                                    startIcon={<EditIcon />}
                                                >
                                                    Update
                                                </Button>
                                            </TableCell>
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