/**
 * Determines whether an input is a map or not.
 * @param value - input
 * @returns true if the input is a map, false otherwise.
 * @example
 * ```ts
 *  isMap(new Map<string, number>()) // true
 *  isMap({ id: 1 })                 // false
 *  isMap([1, 2, 3])                 // false
 * ```
 * @public
 */
export function isMap<T>(value: T): value is T {
  return value instanceof Map;
}
