import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({});

class LoginComponent extends React.Component {

    static propTypes = {
        classes: PropTypes.object,
        handleUsername: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            username: null
        }
    }

    onSave(event){
        event.preventDefault();
        this.props.handleUsername(this.state.username);
    }

    onInputChange(event) {
       this.setState({username : event.target.value});
    }

    render() {
        const {classes} = this.props;

        return (
            <Container >
                <Paper elevation={3} >
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={::this.onSave}>

                        <TextField required
                                   id="standard-required"
                                   label="Required"
                                   onChange={::this.onInputChange}
                                   helperText="Some important text"
                        />

                    </form>
                </Paper>
            </Container>
        );
    }
}


export default withStyles(styles)(LoginComponent);
