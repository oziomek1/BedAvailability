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
import EditIcon from '@material-ui/icons/Edit';
import * as colors from '../../data/colors';
import * as bedStatus from '../../data/bedsStatus';
import './BedsList.css';

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

class BedsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beds: [
                [
                    {status: bedStatus.bedsStatus.free},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.free},
                    {status: bedStatus.bedsStatus.free},
                ],
                [
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.free},
                ],
                [
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.free},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.free},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                ],
                [
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                ],
                [
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.free},
                    {status: bedStatus.bedsStatus.taken},
                    {status: bedStatus.bedsStatus.taken},
                ],
            ]
        };
    }

    updateBed(i) {
        // TODO
    }

    render() {
        const { classes } = this.props;
        const ward = this.props.wardId;
        console.log(ward);
        return (
            <Grid item xs={12} sm={12} md={6}>
                <Paper className={classes.root}>
                    <Toolbar className={classes.tableToolbar}>Ward beds</Toolbar>
                    <TableContainer >
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Bed ID</StyledTableCell>
                                    <StyledTableCell>Bed status</StyledTableCell>
                                    <StyledTableCell align="right">Update bed status</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.beds[ward].map((item, i) => {
                                    return (
                                        <TableRow 
                                            style={{ backgroundColor: item.status.color }} 
                                            key={`row-${i}`}
                                        >
                                            <StyledTableCell style={{ width: '25%' }}>{`Bed ${i + 1}`}</StyledTableCell>
                                            <StyledTableCell style={{ width: '25%' }}>{item.status.description}</StyledTableCell>
                                            <TableCell align="right">
                                                <Button
                                                    onClick={this.updateBed.bind(this, i)}
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

BedsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BedsList);