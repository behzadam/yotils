/**
 * Determines whether an input is null or not.
 * @param value - input
 * @returns true if the input is null, false otherwise.
 * @example
 * ```ts
 * isNull(null)      // true
 * isNull(undefined) // false
 * isNull({})        // false
 * ```
 * @public
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
