import { API_URL, HTTP_HEADER_NAME_OF_TOKEN } from '../constants';

const fetch = window.fetch;

const getToken = response => {
	response.headers.get(HTTP_HEADER_NAME_OF_TOKEN);
}

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

const Http = {
	get: async () => {},

	post: async (endpoint, data) => {
		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'},
		};

		return fetch(`${API_URL}${endpoint}`, config)
			.then(handleResponse);
	},
};

export default Http