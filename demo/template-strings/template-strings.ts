/* eslint-disable */
import { strict as assert } from "assert";

function greet(message) {
    // " "
    // ' '
    // ` `
    console.log(`Hello, ${message}`);
}

greet("TypeScript");

const kids = 2;
const adults = 4;
const totalPeople = `There are ${kids + adults} people`;

console.log(totalPeople);