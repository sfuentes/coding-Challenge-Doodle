import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

import Message from './components/Message';
import NoMessages from './components/NoMessages';
import SelfMessage from './components/SelfMessage';

const styles = () => ({});

class MessagesComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.string,
            sendDate: PropTypes.string
        })),
        currentUser: PropTypes.string
    };

    componentDidMount() {
        this.scrollDown();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollDown() // Oh dear ugly but it's late ...
    }

    scrollDown() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    render() {
        const {messages, currentUser} = this.props;

        return (
            <React.Fragment>
                {messages.length > 0 && messages.map((message) => {
                    if (currentUser === message.author) {
                        return <SelfMessage key={message.id} message={message}/>
                    }
                    return <Message key={message.id} message={message}/>
                })}
                {!messages.length && <NoMessages/>}
            </React.Fragment>
        );
    }
}


export default withStyles(styles)(MessagesComponent);
