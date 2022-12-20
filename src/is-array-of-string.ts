import { isString } from './is-string';

/**
 * Determines whether the input is array of string or not.
 * @param value - input
 * @returns true if the input is array, false otherwise.
 * @example
 * ```ts
 * isArrayOfString(["a", "b", "c"]) // true
 * isArrayOfString(["a", "b", 1])   // false
 * ```
 * @public
 */
export function isArrayOfString(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => isString(item));
}
