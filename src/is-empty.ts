import { getLength } from './get-length';

/**
 * Determines whether an input is empty or not.
 * @param value - input.
 * @returns true if the input is empty, false otherwise.
 * @example
 * ```ts
 *  isEmpty([])     // true
 *  isEmpty({})     // true
 *  isEmpty("")     // true
 *  isEmpty(null)   // true
 *  isEmpty(true)   // true
 *  isEmpty(1)      // true
 *  isEmpty({id:1}) // false
 *  isEmpty([1])    // false
 *  isEmpty("1")    // false
 * ```
 * @public
 */
export function isEmpty<T>(value: T): value is T {
  if (value == null) return true;
  return getLength(value) === 0;
}
