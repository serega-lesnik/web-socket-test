import { getKey } from './localStorrageServices';
import { API_URL, HTTP_HEADER_NAME_OF_TOKEN } from '../constants';

const fetch = window.fetch;

const handleResponse = async response => {
	const data = await response.json();
	const token = response.headers.get(HTTP_HEADER_NAME_OF_TOKEN);
	if (response.ok) {
		return {
			data,
			token,
		};
	} else {
		return Promise.reject(data);
	}
};

const getHeaders = () => {
	const headers = {
		'Content-Type': 'application/json'
	};
	const token = getKey();
	if (token) {
		headers[HTTP_HEADER_NAME_OF_TOKEN] = token;
	}

	return headers;
};

const Http = {
	get: async endpoint => {
		const config = {
			method: 'GET',
			headers: getHeaders(),
		};

		return fetch(`${API_URL}${endpoint}`, config)
			.then(handleResponse);
	},

	post: async (endpoint, data) => {
		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: getHeaders(),
		};

		return fetch(`${API_URL}${endpoint}`, config)
			.then(handleResponse);
	},
};

export default Http