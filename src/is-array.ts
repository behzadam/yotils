/**
 * Determines whether the input is an array or not.
 * @param value - Generic input.
 * @returns array
 *
 */
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}
