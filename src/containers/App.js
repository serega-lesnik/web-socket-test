import React from 'react';

import { ContextLogin } from '../reducer/login';

import Login from './Login';
import Home from './Home';

// const Login = React.lazy(() => import('./components/Login'));
// const Home = React.lazy(() => import('./components/Home'));

const App = () => {
	const {state, dispatch} = React.useContext(ContextLogin);

	
	// console.log('--- App props:', state);
	const { token } = state;
	let isAuth = !!token;
	return(
		isAuth ? <Home  loginDispatch={dispatch} /> : <Login {...state} loginDispatch={dispatch} />
	);
};

export default App;