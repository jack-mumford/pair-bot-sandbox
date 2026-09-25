/**
 * Returns a friendly farewell for the given name.
 * @param {string} name
 * @returns {string}
 */
export function farewell(name) {
  const trimmed = name.trim();
  return trimmed ? `Goodbye, ${trimmed}!` : 'Goodbye, world!';
}
