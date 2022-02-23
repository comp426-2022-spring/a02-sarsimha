import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const myArgs = minimist(process.argv.slice(2));
myArgs["num"];

const num = myArgs.num || 1;
var list = [];

let i = 0;

while (i < num) {
    list.push(coinFlips(1));
    i++;
}

console.log(list);
console.log(countFlips(list));
