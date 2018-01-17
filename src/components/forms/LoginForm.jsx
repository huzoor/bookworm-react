import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'; 
// eslint-disable-next-line
import Validator from 'validator';
import InlineError from '../messages/InlineError'; 
// eslint-disable-next-line
import PropTypes from 'prop-types';

class LoginForm extends Component {
    state = {
        data :{ email: "", password:""},
        loading:false,
        errors:{}
    }
    onChange = e => this.setState({ 
        data:{...this.state.data,
        [e.target.name]: e.target.value 
    }});

    onSubmit = ()=>{
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0 ) this.props.submit(this.state.data);
    }
    // eslint-disable-next-line
    validate(data){
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email =  `Not a valid Email ${data.email}`;
        if(!data.password) errors.password = `Password can't be empty`;
        else if(data.password && data.password.length < 10  ) errors.password = `Password can't be less than 10 `;
        else if(data.password && data.password.length > 20  ) errors.password = `Password can't be greater than 10 `;
        
        return errors;
    }
    render(){
        const { data, errors } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="please enter u r email" 
                        value={data.email} 
                        onChange = {this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="make it secure" 
                        value={data.password} 
                        onChange = {this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Button primary> Login Here</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;