import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from './../services/authService';

class UserProfile extends Component {
	state = {};
	render() {
		if (!auth.getCurrentUser()) return <Redirect to="/login" />;

		return (
			<React.Fragment>
				<h1>My Profile</h1>
				<h4>Statistics viasuals coming soon...</h4>
			</React.Fragment>
		);
	}
}

export default UserProfile;
