import assert from 'node:assert/strict';
import { test } from 'node:test';
import { greet } from '../src/greet.js';

test('greets a name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('falls back to world for an empty name', () => {
  assert.equal(greet('   '), 'Hello, world!');
});
