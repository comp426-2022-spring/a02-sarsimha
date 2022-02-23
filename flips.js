import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const myArgs = minimist(process.argv.slice(2));
myArgs["num"];

const num = myArgs.num || 1;
var list = [];

list = coinFlips(num);
console.log(list);
console.log(countFlips(list));
