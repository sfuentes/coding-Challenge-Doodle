import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

import Message from './components/Message';
import NoMessages from './components/NoMessages';

const styles = (theme) => ({});

class MessagesComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            content: PropTypes.string,
            senderId: PropTypes.string,
            sendDate: PropTypes.string
        }))
    };

    render() {
        const {classes, messages} = this.props;

        return (
            <React.Fragment>
                {messages.length > 0 && messages.map((message)=>{
                    return <Message message={message} />
                })}
                {!messages.length && <NoMessages />}
            </React.Fragment>
        );
    }
}


export default withStyles(styles)(MessagesComponent);
