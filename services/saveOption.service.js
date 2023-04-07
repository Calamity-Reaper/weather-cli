import {printError, printSuccess} from "./log.service.js";
import {saveKeyValue} from "./storage.service.js";
import {DATA_KEY_DICTIONARY} from "../helpers/constants.js";
import {languageValidator} from "../helpers/languageValidator.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('No token passed');
        return;
    }
    try {
        await saveKeyValue(DATA_KEY_DICTIONARY.token, token);
        printSuccess('Token is saved');
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('No city passed');
        return;
    }
    try {
        await saveKeyValue(DATA_KEY_DICTIONARY.city, city);
        printSuccess('City is saved');
    } catch (e) {
        printError(e.message);
    }
};

const saveLanguage = async (lang) => {
    if (!lang.length) {
        return printError('No city passed');
    }
    if (!languageValidator(lang)) {
        return printError('Incorrect language! Use -l command, to see available languages');
    }
    try {
        await saveKeyValue(DATA_KEY_DICTIONARY.language, lang);
        printSuccess('Language is saved');
    } catch (e) {
        printError(e.message);
    }
};

export {saveCity, saveToken, saveLanguage}