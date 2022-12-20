import { getTag } from './internal';
import { isObjectLike } from './is-object-like';

/**
 * Determines whether the input is `Set` or not.
 * @param value - input.
 * @returns true if the input is `Set`, false otherwise.
 * @example
 * ```ts
 * isSet(new Set()) // true
 * isSet([])        // false
 * ```
 * @public
 */
export function isSet<T>(value: T): value is T {
  return isObjectLike(value) && getTag(value) === '[object Set]';
}
