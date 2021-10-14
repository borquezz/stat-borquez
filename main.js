#!/usr/bin/env node

const lib = require("./lib");

// Error handling: Insufficient parameters
if (process.argv.length <= 3) {
    console.log("Insufficient parameters!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

// Error handling: If NaN argument is given
if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result = 0;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        console.log(result);
        break;
    case "avg":
        result = lib.avg(numbers);
        console.log(result);
        break;
    case "max":
        result = lib.max(numbers);
        console.log(result);
        break;
    case "mean2":
        result = lib.mean2(numbers);
        console.log(result[0].toFixed(2), result[1].toFixed(2)); //Prints them as strings, ask if its okay
        break;
    case "med2":
        result = lib.med2(numbers);
        console.log(result[0].toFixed(2), result[1].toFixed(2));
        break;
    case "pareto":
        result = lib.pareto(numbers);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i][0], result[i][1]);
        }
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}
