import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
	return (
		<React.Fragment>
			<Navbar className="navBar" variant="dark" expand="lg">
				<Navbar.Brand>Sugar Monster</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink className="linkColor" to="/tracker">
							Tracker
						</NavLink>
					</Nav>
					{!user && (
						<React.Fragment>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/login"
								>
									Login
								</NavLink>
							</Nav>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/register"
								>
									Register
								</NavLink>
							</Nav>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/how-to-play"
								>
									How to Play
								</NavLink>
							</Nav>
						</React.Fragment>
					)}
					{user && (
						<React.Fragment>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/user-profile"
								>
									My Profile
								</NavLink>
							</Nav>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/how-to-play"
								>
									How to Play
								</NavLink>
							</Nav>
							<Nav className="mr-auto">
								<NavLink
									className="linkColor"
									to="/logout"
								>
									Logout
								</NavLink>
							</Nav>
						</React.Fragment>
					)}
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
};

export default NavBar;
