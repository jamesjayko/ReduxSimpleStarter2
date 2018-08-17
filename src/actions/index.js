import axios from 'axios';

const API_KEY = 'a5faad6a3b4ba524f1ea27ed2102be0c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
    // redux-promise middleware will interupt this axios call (which will return a promise by nature) 
    // and make it regular data to send to all the reducers instead of a promise object.
    const request = axios.get(url);
    
	// console.log('request:', request); // proof that it returns a promise not data.
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
