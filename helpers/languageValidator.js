import {LANGUAGE_DICTIONARY} from "./constants.js";

const languageValidator = (lang) => {
    for (let key in LANGUAGE_DICTIONARY) {
        if (lang === LANGUAGE_DICTIONARY[key]) {
            return true;
        }
    }
    return false;
};

export {languageValidator}