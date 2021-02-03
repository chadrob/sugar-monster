import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
	let autoPhrase = 'current-' + name;
	return (
		<div className="form-group">
			<label htmlFor={name}>
				<strong>{label}</strong>
			</label>
			<input
				{...rest}
				name={name}
				id={name}
				className="form-control"
				autoComplete={autoPhrase}
			/>
			{error && (name == 'username' || name == 'password') && (
				<div className="alert alert-danger">{error}</div>
			)}
		</div>
	);
};

export default Input;
