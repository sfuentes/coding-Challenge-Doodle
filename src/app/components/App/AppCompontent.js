import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Paper} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({});

class AppComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
    };

    render() {
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <Paper>
                    <CircularProgress/>
                </Paper>
            </Container>
        );
    }
}


export default withStyles(styles)(AppComponent);
