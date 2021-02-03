import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config.json';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = config.apiUrl;

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedError) {
		// Unexpected (network down, server down, database down, bug in application code
		// - Log the error messages
		console.log('Logging the error', error);
		// - Display a generic and friendly error message
		toast.error('An unexpected error occured.');
	}
	return Promise.reject(error);
});

function setJwt(jwt) {
	axios.defaults.headers.common['x-auth-token'] = jwt;
}

const httpService = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setJwt,
};

export default httpService;
