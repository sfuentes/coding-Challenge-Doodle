import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from './LoginComponent';
import {SET_USER_NAME} from '../App/constants';

class LoginContainer extends React.Component {

    static propTypes = {
        storeUsername: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(name) {

        this.props.storeUserName(name)
    };

    render() {
        return (
            <LoginComponent handleUsername={this.handleUsername}/>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    storeUserName: (name) => dispatch({type: SET_USER_NAME, name})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
