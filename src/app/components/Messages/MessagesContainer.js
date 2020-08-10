import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Messages from './MessagesComponent';

class MessagesContainer extends React.Component {
    static propTypes = {};

    render() {
        const {messages} = this.props;
        return (
            <Messages messages={messages}/>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesContainer);
