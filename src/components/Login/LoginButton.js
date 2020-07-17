import React from 'react';

const LoginButton = ({
	handleLogin,
	disabled,
}) => {
	const handleClick = (e) => {
		e.preventDefault();
		handleLogin();
	}

	return (
		<button className='log-button' onClick={handleClick} disabled={disabled}>
			Login
		</button>
	)
};

export default LoginButton;