import { coinFlips, countFlips } from "./modules/coin.mjs";
const myArgs = process.argv.slice(2);
let number;
for (let i = 0; i < myArgs[0].length; i++) {
    number = myArgs[0].slice(9,11);
}
if (process.argv.length < 2) {
    console.log(coinFlips(1));
    console.log(countFlips(coinFlips(1)));
    process.exit(1);
}
console.log(coinFlips(number));
console.log(countFlips(coinFlips(number)));
