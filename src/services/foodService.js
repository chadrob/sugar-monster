import http from './httpService';

const apiEndpoint = '/food';

function getFoodUrl(id, date) {
	return `${apiEndpoint}/${id}/${date}`;
}

export function getFood(user) {
	const now = new Date();
	const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
	return http.get(getFoodUrl(user.email, date));
}

export function addFood(user, food, sugarAmount, date, time) {
	const data = {
		email: user.email,
		food: food,
		sugarAmount: sugarAmount,
		date: date,
		time: time,
	};
	return http.post(apiEndpoint, data);
}

export function deleteFood(email, foodId) {
	return http.delete(`${apiEndpoint}/${email}/${foodId}`);
}
