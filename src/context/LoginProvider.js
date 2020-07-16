import React from 'react';
import { ContextLogin, initialState, loginReducer } from '../reducer/login';

const LoginProvider = ({children}) => {
	const [ state, dispatch ] = React.useReducer(loginReducer, initialState);
	return (
		<ContextLogin.Provider value={{ loginDispatch: dispatch, loginState: state }}>
			{children}
		</ContextLogin.Provider>
	)
};

export default LoginProvider;