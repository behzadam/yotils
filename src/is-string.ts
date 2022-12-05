/**
 * Determines whether the input is string or not.
 * @param value - input
 * @returns true if the input is string, false otherwise.
 * @example
 * ```ts
 * isString("string") // true
 * isString('string') // true
 * isString(`string`) // true
 * isString(123)      // false
 * ```
 * @public
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
