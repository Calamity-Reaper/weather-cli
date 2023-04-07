import chalk from 'chalk';
import dedent from "dedent-js";
import {LANGUAGE_DICTIONARY} from "../helpers/constants.js";
import {weatherTranslation} from "../helpers/weatherTranslation.js";

const printError = (err) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${err}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
};

const printHelp = () => {
    console.log(
      dedent`${chalk.bgCyan.black(` HELP `)}
        Without params - print weather
        -s [CITY] - set your city
        -h - print help
        -t [API_KEY] - set api key
      `
    );
};

const printLangHelp = () => {
    console.log(
        dedent`${chalk.bgCyan.black(' LANGUAGES ')}`
    );
    for (const lang in LANGUAGE_DICTIONARY) {
        console.log(`${LANGUAGE_DICTIONARY[lang]} - ${lang}`);
    }
}

const printWeather = (lang, res) => {
  console.log(weatherTranslation(lang, res));
}

export {printError, printSuccess, printHelp, printLangHelp, printWeather}