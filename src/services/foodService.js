import http from './httpService';

const apiEndpoint = '/food';

function getFoodUrl(id) {
	return `${apiEndpoint}/${id}`;
}

export function getFood(user) {
	return http.get(getFoodUrl(user.email));
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
