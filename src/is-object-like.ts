/**
 * Determines whether the input is an object like or not.
 * When a value is object like, it is not null and `typeof` result is "object".
 * @param value - input.
 * @returns true when the input is an object like, or false when it is not.
 * @example
 * ```ts
 * isObjectLike({})         // true
 * isObjectLike([])         // true
 * isObjectLike(Function)   // false
 * isObjectLike(null)       // false
 * ```
 * @public
 */
export function isObjectLike<T>(value: T): value is T & object {
  return typeof value === 'object' && value !== null;
}
