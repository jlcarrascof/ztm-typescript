/* eslint disable */
import { strict as assert } from 'assert';

// NOT
const writing = true;
const reading = !writing;
assert.equal(reading, false);

// OR
// (pick 1 movie)
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;
assert.equal(suggestMovie, true);
