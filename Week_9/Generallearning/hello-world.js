"use strict"

const isEven = require(`./exporting`);
const isOdd = require(`./exporting`);

const PREFIX = `\x1b` // for ANSI colour command

const RESET = PREFIX+"[0m"; // default colour
const BRED =PREFIX+"[41m";
const namen = "MrWalshy";

//I like using format specifiers waaay less than template literals
console.log("Hello world");
console.log("Or, %s, to be more precise, your name is %s", namen, namen)

//change colours, maybe
console.log(`Your name is ${BRED}${namen}${RESET}`)


