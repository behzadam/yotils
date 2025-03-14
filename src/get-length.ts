import { isObject } from './is-object';
import { isString } from './is-string';

/**
 * Determines the length of the input based on its type.
 *
 * @param input - The value to determine the length of
 * @returns The length of the input (string/array length, object key count, or 0 for primitives and null)
 * @example
 * ```ts
 * getLength('hello'); // 5
 * getLength([1, 2, 3]); // 3
 * getLength({ a: 1, b: 2 }); // 2
 * getLength(42); // 0
 * ```
 *
 * @public
 */
export function getLength(input: unknown): number {
  if (input === null || input === undefined) return 0;
  if (isString(input) || Array.isArray(input)) return input.length;
  if (isObject(input)) {
    const keys = Object.keys(input);
    return keys.length;
  }
  // For primitive types:
  return 0;
}
