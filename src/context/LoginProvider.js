import React from 'react';
import { ContextLogin, initialState, loginReducer } from '../reducer/login';

// import {AuthProvider} from './auth-context';
// import {UserProvider} from './user-context';

// const AuthContext = React.createContext()

const LoginProvider = ({children}) => {
	const [ state, dispatch ] = React.useReducer(loginReducer, initialState);
	return (
		<ContextLogin.Provider value={{dispatch, state}}>
			{children}
		</ContextLogin.Provider>
	)
};

export default LoginProvider;