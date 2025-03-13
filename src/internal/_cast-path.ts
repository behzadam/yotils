/**
 * Converts a path string or array into a normalized array of path segments.
 *
 * @param path - A path represented as either a dot-notation string or an array of path segments
 * @returns An array of path segments, splitting dot and bracket notation
 *
 * @example
 * castPath('a.b[0]') // returns ['a', 'b', '0']
 * castPath(['a', 'b']) // returns ['a', 'b']
 *
 * @internal
 */
export function castPath(path: string | string[]): string[] {
  return Array.isArray(path) ? path : path.split(/\.|\[|\]/).filter(Boolean);
}
