import React from 'react';

const LoginButton = ({ handleLogin }) => {
	const handleClick = (e) => {
		e.preventDefault();
		handleLogin();
	}

	return (
		<button className='login-button' onClick={handleClick}>
			Login
		</button>
	)
};

export default LoginButton;