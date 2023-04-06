import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js';
import axios from "axios";

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('API key not set, set it by command -t [API_KEY]');
    }
    /*
        https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        Full api url
    */
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric'
        }
    });
};

export {getWeather}