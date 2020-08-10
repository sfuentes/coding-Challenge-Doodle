import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppComponent from './AppCompontent';


class AppContainer extends React.Component {
    static propTypes = {
        tickets: PropTypes.array,
        closeTicket: PropTypes.func
    };
    render() {
        const {tickets} = this.props;

        return (
            <AppComponent tickets={tickets} closeTicket={this.handleCloseTicket} blockTicket={this.handleBlockTicket}/>
        );

    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
