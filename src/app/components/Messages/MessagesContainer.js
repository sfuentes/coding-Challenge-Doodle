import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Messages from './MessagesComponent';
import {fetchAllMessages} from './actions';
import CircularProgress from '@material-ui/core/CircularProgress';

class MessagesContainer extends React.Component {
    static propTypes = {
        loadAllMessages: PropTypes.func,
        messages: PropTypes.array,
        isLoaded: PropTypes.bool,
        currentUser: PropTypes.string
    };

    componentDidMount() {
        const {loadAllMessages} = this.props;

        loadAllMessages();
    }


    render() {
        const {messages, isLoaded, currentUser} = this.props;

        if (isLoaded) {
            return <Messages messages={messages} currentUser={currentUser}/>
        }
        return <CircularProgress/>;
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages.list,
    isLoaded: !!state.messages.lastUpdated,
    currentUser: state.user.name
});

const mapDispatchToProps = (dispatch) => ({
    loadAllMessages: () => dispatch(fetchAllMessages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesContainer);
