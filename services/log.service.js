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
};

const printWeather = (res) => {
  console.log(
    dedent`${chalk.bgYellow.grey('WEATHER')}
        City: ${res.name}
        Weather: ${res.weather[0].description}
        Temperature: ${res.main.temp}
        Fells like: ${res.main.feels_like}
        Wind speed: ${res.wind.speed} 
    `
  );
}

export {printError, printSuccess, printHelp, printWeather}