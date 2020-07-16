import React from "react";

import socketModel from './models/socketModel';
import {
	SOCKET_GET_URL,
	SOCKET_CONNECTED,
	SOCKET_DISCONNECTED,
	SOCKET_MESSAGE,
} from './actions/socketAction';

export const ContextSocket = React.createContext();
export const initialState = {
	...socketModel,
};

export const socketReducer = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;

	switch (type) {

		case SOCKET_GET_URL: {
			const { url } = action;
			return {
				...state,
				url,
			};
		}

		case SOCKET_DISCONNECTED: {
			return {
				...state,
				url: null,
				connected: false,
			};
		}

		case SOCKET_CONNECTED: {
			return {
				...state,
				connected: true,
			};
		}

		case SOCKET_MESSAGE: {
			const { lastMessage } = action;
			return {
				...state,
				lastMessage,
			};
		}

		default: {
			return {
				...state
			};
		}
	}
};
