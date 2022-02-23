import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const myArgs = minimist(process.argv.slice(2));
myArgs["number"];

const number = myArgs.number || 1;
var list = [];

// console.log(coinFlips(number));
list = coinFlips(number);
console.log(list);
console.log(countFlips(list));
