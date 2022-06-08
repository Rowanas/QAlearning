"use strict";

let coltext = "This string is red"
let prefix = `\x1b`;

let colourIf = () =>    {
    let colour = ""
    if (coltext.toLowerCase.includes("red"))   {
            colour = "red";
        } else if (coltext.toLowerCase.includes("yellow")) {
            colour = "yellow";
        } else if (coltext.toLowerCase.includes("blue")) {
            colour = "blue";
        } else {
            colour = "green";
    }
}

let colourated = () => {
switch(colour)  {
case "red":
   console.log(`${prefix}[41m${coltext}`)
    break;
default:   
console.log(`${prefix}[41m${coltext}`)
}
}


