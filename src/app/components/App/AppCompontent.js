import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Messages from '../Messages';
import WriteMessage from '../WriteMessage';

const theme = createMuiTheme({}); // needs to go to Layout

const styles = ({theme}) =>{};

class AppComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
    };

    render() {
        const {classes} = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md">
                    <CssBaseline/>
                    <Messages />

                    <WriteMessage />
                </Container>
            </ThemeProvider>
        );
    }
}


export default withStyles(styles)(AppComponent);
