/* eslint-disable */
import { strict as assert } from "assert";

let n = 1;
// "postfix" increment
n++;
assert.equal(n, 2);
// "prefix" increment
++n;
assert.equal(n, 3);

n = 5;
const k = n++;
// assert.equal(k, 6);
assert.equal(n, 6);

n = 5;
const j = ++n;
assert.equal(j, 6);

n = 5;
const t = --n;
assert.equal(t, 4);

n = 5;
n += 5;
assert.equal(n, 10);
n -= 5;
assert.equal(n, 5);
n -= 1;
assert.equal(n, 4);

// +=
// -=
// *=
// /=
// %=