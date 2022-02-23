import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const myArgs = minimist(process.argv.slice(2));
myArgs["number"];

const num = myArgs.number || 1;
var list = [];

list = coinFlips(num);
console.log(list);
console.log(countFlips(list));
