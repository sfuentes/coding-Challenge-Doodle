import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {sendMessage} from './actions';
import WriteMessageComponent from './WriteMessageComponent';

class WriteMessageContainer extends React.Component {
    static propTypes = {
        sendMessage : PropTypes.func
    };

    render() {
        const {sendMessage} = this.props;

        return (
            <WriteMessageComponent onSendMessage={sendMessage} />
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    sendMessage : (message)=> dispatch(sendMessage(message))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WriteMessageContainer);
