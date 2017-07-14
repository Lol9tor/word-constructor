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
		method: 'GET',
		url: '/words'
	})
}

export function getWordsForUser() {
	return sendRequest({
		method: 'GET',
		url: '/words/user'
	})
}

export function getWord(id) {
	return sendRequest({
		method: 'GET',
		url: `/words/${id}`
	})
}

export function checkWord(word) {
	return sendRequest({
		method: 'POST',
		url: `/words/${word._id}/check`,
		body: JSON.stringify(word)
	})
}

export function createWord(word) {
	return sendRequest({
		method: 'POST',
		url: `/words`,
		body: JSON.stringify(word)
	})
}

export function deleteWord(id) {
	return sendRequest({
		method: 'DELETE',
		url: `/words/${id}`
	})
}