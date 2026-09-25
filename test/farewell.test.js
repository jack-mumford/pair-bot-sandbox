import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell } from '../src/farewell.js';

test('bids farewell to a name', () => {
  assert.equal(farewell('Ada'), 'Goodbye, Ada!');
});

test('falls back to world for an empty name', () => {
  assert.equal(farewell('   '), 'Goodbye, world!');
});
