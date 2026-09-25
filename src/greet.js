/**
 * Returns a friendly greeting for the given name.
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  const trimmed = name.trim();
  return trimmed ? `Hi, ${trimmed}!` : 'Hi, world!';
}
