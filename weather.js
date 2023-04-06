#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        //Print help
    }
    if (args.s) {
        //Save city
    }
    if (args.t) {
        //Save token
    }
    //Print weather
};

initCLI();