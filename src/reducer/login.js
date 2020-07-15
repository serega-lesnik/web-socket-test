import React from "react";
export const ContextLogin = React.createContext();

import { getKey } from '../services/localStorrageServices';
import loginModel from './models/loginModel';
import {
	LOGIN,
	LOGIN_ERROR,
	LOGIN_FETCHING,
	LOGIN_OUT,
} from './actions/loginActions';

const token = getKey();

export const initialState = {
	...loginModel,
	token,
	fetched: !!token,
};

export const loginReducer = (state = initialState, action) => {
	const { type } = action;
	if (!type) return state;
	switch (type) {

		case LOGIN_FETCHING: {
			return {
				...state,
				error: null,
				isFetching: true,
				fetched: false,
			};
		}

		case LOGIN_ERROR: {
			const { error } = action;
			return {
				...state,
				error,
				isFetching: false,
				fetched: false,
			};
		}

		case LOGIN: {
			const { token } = action;
			return {
				...state,
				token,
				error: null,
				isFetching: false,
				fetched: true,
			};
		}

		case LOGIN_OUT: {
			return {
				...loginModel,
			}
		}

		default: {
			const { token } = state;
			return {
				...state,
				fetched: !!token,
			};
		}
	}
};