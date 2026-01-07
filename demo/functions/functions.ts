/* eslint disable */
import { strict as assert } from "assert";

function sayHello() {
    console.log("Hello");
}

sayHello();

function sum(lhs, rh2) {
    return lhs + rh2;
}

const answer = sum(2, 2);
console.log(answer);

const answer2 = sum(answer, 2);
assert.equal(answer2, 6);

const answer3 = sum(sum(1, 1), sum(2, 2));
assert.equal(answer3, 6);

const lsh = sum(1, 1);
const rhs = sum(2, 2);
const answer4 = sum(lsh, rhs);
assert.equal(answer4, 6);
