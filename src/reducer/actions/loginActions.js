import { getKey, setKey, removeKey } from '../../services/localStorrageServices';
import { HTTP_HEADER_NAME_OF_TOKEN, API_ENDPOINTS } from '../../constants';
import Http from '../../services/httpServicae';

export const LOGIN = 'login.action';
export const LOGIN_ERROR = 'login.error';
export const LOGIN_FETCHING = 'login.fetching';
export const LOGIN_OUT = 'login.out';

export const logIn = (userCredentials, callback = null) => dispatch => {
	dispatch({ type: LOGIN_FETCHING });

	const onError = response => {
		const { code, description } = response;
		const error = description || response.message;

		removeKey();

		dispatch({
			type: LOGIN_ERROR,
			error,
		});
	};

	const onSuccess = response => {
		const { data, token } = response;
		const { status } = data;
		if (status && status.toUpperCase() == 'OK') {
			if (token) {
				setKey(token);
				if (callback && typeof callback === 'function') {
					callback();
				}
			}

			dispatch({
				type: LOGIN,
				token: token || null,
			});
		}
	};

	Http.post(API_ENDPOINTS.LOGIN, userCredentials).then(onSuccess).catch(onError);
};

export const logOut = () => (dispatch) => {
	dispatch({ type: LOGIN_FETCHING });

	removeKey();
	dispatch({ type: LOGIN_OUT });
}