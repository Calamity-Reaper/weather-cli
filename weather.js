#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('No token pass');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved');
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('No city pass');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City is saved');
    } catch (e) {
        printError(e.message);
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather(await getKeyValue(TOKEN_DICTIONARY.city));
        printWeather(weather);
    } catch (e) {
        if(e?.response?.status === 404) {
            printError('Incorrect city');
        } else if (e?.response?.status === 401) {
            printError('Incorrect token');
        } else {
            printError(e.message);
        }
    }
}


const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    //Print weather
    return getForcast();
};

initCLI();