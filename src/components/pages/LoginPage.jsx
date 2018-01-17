import React,  {Component}  from 'react';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';
// eslint-disable-next-line
import PropTypes from 'prop-types';

class LoginPage extends Component {
    submit = data =>{
        this.props.login(data).then(
            ()=> this.props.history.push('/')
        )
        console.log('DATA', data)
    }
    render(){
        return (
            <div>
                <h1>LoginPage</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
   
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    login: PropTypes.func.isRequired,
}
export default connect(null, {login})(LoginPage);