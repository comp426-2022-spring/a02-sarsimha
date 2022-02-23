import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const myArgs = minimist(process.argv.slice(2));
const call = myArgs["call"] || null;

if (call == null || call != "heads" && call != "tails") {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}