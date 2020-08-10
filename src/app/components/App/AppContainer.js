import React from 'react';
import {connect} from 'react-redux';
import AppComponent from './AppCompontent';
import Login from '../LogIn';


class AppContainer extends React.Component {
    static propTypes = {};

    render() {
        const {isUserKnown} = this.props;

        if (isUserKnown) {
            return <AppComponent/>;
        }
        return <Login/>;
    }
}

const mapStateToProps = (state) => ({
    isUserKnown: state.user.name
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
