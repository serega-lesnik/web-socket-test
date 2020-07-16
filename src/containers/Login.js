import React from 'react';

import LoginComponent, { USERNAME, PASSWORD } from '../components/Login';
import { logIn } from '../reducer/actions/loginActions';

const initialFields = {
	[USERNAME]: '',
	[PASSWORD]: '',
};

const Login = ({
	token,
	error,
	fetched,
	isFetching,
	loginDispatch,
}) => {
	const [ userCredentials, setCredentials ] = React.useState({...initialFields});

	const inputChange = (value, name) => {
		setCredentials({
			...userCredentials,
			[name]: value
		});
	};

	const cearFields = () => {
		setCredentials({...initialFields});
	};

	const handleLogin = () => {
		logIn(userCredentials, cearFields)(loginDispatch);
	}

	const btnDisabled = (!userCredentials[PASSWORD] || !userCredentials[USERNAME] || isFetching);

	return (
		<LoginComponent
			userCredentials={userCredentials}
			inputChange={inputChange}
			handleLogin={handleLogin}
			error={error}
			btnDisabled={btnDisabled}
		/>
	);
};

export default Login;