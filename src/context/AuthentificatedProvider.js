import React from 'react';
import {
	ContextSocket,
	initialState,
	socketReducer
} from '../reducer/socket';

const AuthentificatedProvider = ({children}) => {
	const [ state, dispatch ] = React.useReducer(socketReducer, initialState);
	return (
		<ContextSocket.Provider value={{ wsDispatch: dispatch, socketState: state }}>
			{children}
		</ContextSocket.Provider>
	);
};

export default AuthentificatedProvider;