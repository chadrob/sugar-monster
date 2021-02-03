import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Register from './components/RegisterForm';
import HowToPlay from './components/HowToPlay';
import UserProfile from './components/UserProfile';
import Tracker from './components/Tracker';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	state = {};

	componentDidMount() {
		const user = auth.getCurrentUser();
		this.setState({ user });
	}

	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<ToastContainer />
				<NavBar className="navBar" user={user} />
				<main className="container">
					<Switch>
						<Route path="/login" component={LoginForm} />
						<Route path="/register" component={Register} />
						<Route path="/logout" component={Logout} />
						<Route
							path="/user-profile"
							component={UserProfile}
						/>
						<Route
							path="/tracker"
							render={(props) => (
								<Tracker {...props} user={user} />
							)}
						/>
						<Route
							path="/how-to-play"
							component={HowToPlay}
						/>
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/" exact to="/tracker" />
						<Redirect to="/not-found"></Redirect>
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
