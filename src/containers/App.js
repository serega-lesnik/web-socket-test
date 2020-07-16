import React from 'react';

import { ContextLogin } from '../reducer/login';
import { ContextSocket } from '../reducer/socket';

import Login from './Login';
import Home from './Home';

// const Login = React.lazy(() => import('./components/Login'));
// const Home = React.lazy(() => import('./components/Home'));

const App = () => {
	const {loginState, loginDispatch} = React.useContext(ContextLogin);
	const { socketState, wsDispatch } = React.useContext(ContextSocket);

	// console.log('--- App props:', loginState);
	const { token } = loginState;
	const isAuth = !!token;
	return(isAuth ?
			<Home
				{...socketState}
				loginDispatch={loginDispatch}
				wsDispatch={wsDispatch}
			/> :
			<Login {...loginState} loginDispatch={loginDispatch} />
	);
};

export default App;