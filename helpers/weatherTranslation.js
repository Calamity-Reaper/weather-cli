import {printError} from "../services/log.service.js";
import dedent from "dedent-js";
import chalk from "chalk";

const weatherTranslation = (lang, res) => {
  switch (lang) {
      case 'ua': {
          return dedent`${chalk.bgYellow.grey(' ПОГОДА ')}
            Місто: ${res.name}
            Погода: ${res.weather[0].description}
            Температура: ${res.main.temp}
            Відчуваеться як: ${res.main.feels_like}
            Швидкість вітру: ${res.wind.speed} 
          `;
      }
      case 'ru': {
          return dedent`${chalk.bgYellow.grey(' ПОГОДА ')}
            Город: ${res.name}
            Погода: ${res.weather[0].description}
            Температура: ${res.main.temp}
            Ощущается как: ${res.main.feels_like}
            Скорость ветра: ${res.wind.speed} 
          `;
      }
      case 'en': {
          return dedent`${chalk.bgYellow.grey(' WEATHER ')}
            City: ${res.name}
            Weather: ${res.weather[0].description}
            Temperature: ${res.main.temp}
            Fells like: ${res.main.feels_like}
            Wind speed: ${res.wind.speed} 
          `;
      }
      default: {
          return printError(`Incorrect language! Use -l command, to see available languages.`);
      }
  }
}

export {weatherTranslation}