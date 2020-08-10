import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';

const styles = ((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    bar: {
        justifyContent: 'center',
        minHeight: 82
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    message: {
        minWidth: 600
    },
    input: {
        backgroundColor: grey[200]
    },
    textField: {
        '&:hover': {
            backgroundColor: grey[100]
        },
        '& .Mui-focused': {
            backgroundColor: grey[100]
        }
    }
}));

class WriteMessageContainer extends Component {

    static propTypes = {
        onSendMessage: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            currentMessage: ''
        }
    }

    handleMessageChange(event) {
        const message = event.target.value;
        // add minimal validation && sanitization
        this.setState({currentMessage: message});
    }

    handleSend() {
        this.props.onSendMessage(this.state.currentMessage);
        this.setState({currentMessage: ''})
    }

    render() {
        const {classes} = this.props;
        const {currentMessage} = this.state;
        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.bar}>

                    <TextField
                        id="standard-multiline-flexible"
                        label="Write something nice"
                        multiline
                        rowsMax={4}
                        value={currentMessage}
                        onChange={::this.handleMessageChange}
                        placeholder={'a message a day, keeps the boredom away'}
                        variant="filled"
                        style={{margin: 8}}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,

                        }}
                        InputProps={{
                            className: classes.input
                        }}
                        className={classes.textField}
                    />


                    <IconButton edge="end" color="inherit" onPointerUp={::this.handleSend}>
                        <SendIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(WriteMessageContainer);

