import {getKeyValue} from './storage.service.js';
import {DATA_KEY_DICTIONARY} from "../helpers/constants.js";
import axios from "axios";

const getWeather = async (city, lang) => {
    const token = process.env.TOKEN ?? await getKeyValue(DATA_KEY_DICTIONARY.token);
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
            lang: lang,
            units: 'metric'
        }
    });
    return data;
};

export {getWeather}