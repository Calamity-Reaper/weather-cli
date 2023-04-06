import chalk from 'chalk';
import dedent from "dedent-js";

const printError = (err) => {
    console.log(`${chalk.bgRed('ERROR')} ${err}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
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
}

export {printError, printSuccess, printHelp}