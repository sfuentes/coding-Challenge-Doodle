import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import {fade} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';

const styles = ((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
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
    input: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

class WriteMessageContainer extends Component {

    static propTypes = {
        onSendMessage : PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            currentMessage : ''
        }
    }

    handleMessageChange(event){
        const message  = event.target.value;
        // add minimal validation && sanitization
        this.setState({currentMessage : event.target.value });
    }

    handleSend(){
        this.props.onSendMessage(this.state.currentMessage);
        this.setState({currentMessage : ''})
    }

    render() {
        const {classes} = this.props;
        const {currentMessage} = this.state;
        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>

                        </div>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={4}
                            value={currentMessage}
                            onChange={::this.handleMessageChange}
                            placehodler={'a message a day, keeps the boredom away'}
                        />
                    </div>

                    <div className={classes.grow} />
                    <IconButton edge="end" color="inherit" onPointerUp={::this.handleSend}>
                        <SendIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(WriteMessageContainer);

