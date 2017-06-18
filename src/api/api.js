import fetch from 'isomorphic-fetch';

const API_HEADERS = {
	//'Access-Token': config.TOKEN,
	'Content-Type': `application/json`
};
const API_URL = 'http://localhost:3001';

function sendRequest(params) {
	const {url, ...other} = params;
	const objParam = {...other, ...{headers: API_HEADERS}};
	return fetch(`${API_URL}${url}`, objParam).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(response.statusText)
		}
	})
}

export function getWords() {
	return sendRequest({
		method: 'get',
		url: '/words',
		mode: 'cors'
	})
}