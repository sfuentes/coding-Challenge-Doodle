import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppComponent from './AppCompontent';
import {fetchAllMessages} from '../Messages/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from '../LogIn';
import Container from '@material-ui/core/Container';


class AppContainer extends React.Component {
    static propTypes = {

    };

    componentDidMount() {
       const { isUserKnown, userName } = this.props;

    }

    render() {
        const { isUserKnown } = this.props;

        if(isUserKnown){
            return <AppComponent />;
        }
        return <Login />;
    }
}

const mapStateToProps = (state) => ({
    isUserKnown : state.user.name
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
