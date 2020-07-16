import Http from '../../services/httpServicae';
import { API_ENDPOINTS } from '../../constants';

const SOCKET_GET_URL = 'socket.getUrl';
const SOCKET_CONNECTED = 'socket.connected';
const SOCKET_DISCONNECTED = 'socket.disconnected';
const SOCKET_MESSAGE = 'socket.message';

const socketSubscribe = (cbError = null) => dispatch => {
	const onError = response => {
		const { code, description } = response;
		if (cbError) cbError(code);
		dispatch({
			type: SOCKET_DISCONNECTED,
		});
	};

	const onSuccess = response => {
		const { data: { url } } = response;

		dispatch({
			type: SOCKET_GET_URL,
			url,
		})
	};

	Http.get(API_ENDPOINTS.SOCKET).then(onSuccess).catch(onError);
};

const socketConnected = () => dispatch => {
	dispatch({
		type: SOCKET_CONNECTED,
	})
};

const socketDisconnected = () => dispatch => {
	dispatch({
		type: SOCKET_DISCONNECTED,
	})
};

const socketMessage = lastMessage => dispatch => {
	dispatch({
		type: SOCKET_MESSAGE,
		lastMessage
	})
};


export {
	SOCKET_GET_URL,
	SOCKET_CONNECTED,
	SOCKET_DISCONNECTED,
	SOCKET_MESSAGE,

	socketSubscribe,
	socketConnected,
	socketDisconnected,
	socketMessage,
};