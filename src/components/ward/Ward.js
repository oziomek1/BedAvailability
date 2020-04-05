import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import WardInfo from '../wardinfo/WardInfo';
import './Ward.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginBottom: 40,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  });

class Ward extends Component {
    state = {
        wardId: null
    }
    async componentDidMount () {
        const { id } = this.props.match.params
        this.setState({
            wardId: id,
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify="center" spacing={4}>
                    <WardInfo wardId={this.state.wardId}></WardInfo>
                </Grid>
            </div>
        )
    }

}

Ward.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ward);