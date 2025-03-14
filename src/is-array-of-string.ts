import { isString } from './is-string';

/**
 * Determines whether the input is array of string or not.
 * @param input - input
 * @returns true if the input is array, false otherwise.
 * @example
 * ```ts
 * isArrayOfString(["a", "b", "c"]) // true
 * isArrayOfString(["a", "b", 1])   // false
 * isArrayOfString([])              // false
 * ```
 * @public
 */
export function isArrayOfString(input: unknown): input is string[] {
  if (!Array.isArray(input)) return false;
  if (input.length === 0) return false;
  for (const item of input) {
    if (!isString(item)) return false;
  }
  return true;
}
