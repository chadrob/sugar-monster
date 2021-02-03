import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from './common/form';
import Joi from 'joi-browser';
import * as userService from '../services/userService';
import auth from '../services/authService';

class Register extends Form {
	state = {
		data: { username: '', password: '', name: '' },
		errors: {},
	};

	schema = {
		username: Joi.string().email().required().label('Username'),
		password: Joi.string().min(5).required().label('Password'),
		name: Joi.string().required().label('Name'),
	};

	doSubmit = async () => {
		try {
			const response = await userService.register(this.state.data);
			auth.loginWithJwt(response.headers['x-auth-token']);
			window.location = '/';
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.username = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		if (auth.getCurrentUser()) return <Redirect to="/" />;

		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('name', 'Name')}
					{this.renderInput('username', 'Email')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default Register;
