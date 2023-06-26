/**
 * Determines whether the input is string or not.
 * @param input - input
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
export function isString(input: unknown): input is string {
  return typeof input === 'string';
}
