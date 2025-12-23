/* eslint-disable */
import { strict as assert } from "assert";

const yes = true;
const no = false;

const age = 18;
const canPurchase = age >= 18;
assert.equal(canPurchase, true);

const denyPurchase = age < 18;
assert.equal(denyPurchase, false);
