import React from 'react';

import Input from './Input';
import LoginButton from './LoginButton';
import ErrorMessage from './ErrorMessage';

const USERNAME = 'username';
const PASSWORD = 'password';

const LoginComponent = ({
	userCredentials,
	inputChange,
	handleLogin,
	error,
	btnDisabled,
}) => {

	return (
		<form className='login'>
			<div className='row'>
				<Input
					name={USERNAME}
					placeholder='User name'
					labelText='Username'
					value={userCredentials[USERNAME]}
					inputChange={inputChange}
				/>
			</div>

			<div className='row'>
				<Input
					name={PASSWORD}
					type='password'
					placeholder='Password'
					labelText='Password'
					value={userCredentials[PASSWORD]}
					inputChange={inputChange}
				/>
			</div>
			<div className='row'>
				<ErrorMessage error={error} />
			</div>

			<LoginButton
				handleLogin={handleLogin}
				disabled={btnDisabled}
			/>
		</form>
	);
};

export default LoginComponent;
export {
	USERNAME,
	PASSWORD,
};