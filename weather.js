#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printError, printWeather, printLangHelp} from "./services/log.service.js";
import {getKeyValue} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";
import {saveCity, saveLanguage, saveToken} from "./services/saveOption.service.js";
import {DATA_KEY_DICTIONARY} from "./helpers/constants.js";

const getForcast = async () => {
    try {
        const weather = await getWeather(await getKeyValue(DATA_KEY_DICTIONARY.city), await getKeyValue(DATA_KEY_DICTIONARY.language));
        printWeather(await getKeyValue(DATA_KEY_DICTIONARY.language), weather);
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
    if (args.hasOwnProperty('h')) {
        //Print help
        return printHelp();
    }
    if (args.hasOwnProperty('s')) {
        //Save city
        if (args.s) {
            return saveCity(args.s);
        } else {
            return printError(`City can't be empty`);
        }
    }
    if (args.hasOwnProperty('t')) {
        //Save token
        if (args.t) {
            return saveToken(args.t);
        } else {
            return printError(`Token can't be empty`);
        }
    }
    if (args.hasOwnProperty('l')) {
        //Save language
        if (args.l) {
            return saveLanguage(args.l)
        } else {
            return printLangHelp();
        }
    }
    //Print weather
    return getForcast();
};

initCLI();