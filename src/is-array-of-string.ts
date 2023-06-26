import { isString } from './is-string';

/**
 * Determines whether the input is array of string or not.
 * @param input - input
 * @returns true if the input is array, false otherwise.
 * @example
 * ```ts
 * isArrayOfString(["a", "b", "c"]) // true
 * isArrayOfString(["a", "b", 1])   // false
 * ```
 * @public
 */
export function isArrayOfString(input: unknown): input is string[] {
  return Array.isArray(input) && input.every((item) => isString(item));
}
