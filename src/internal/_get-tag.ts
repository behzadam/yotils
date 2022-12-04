/**
 * Calls `toString` with `value` and returns a string object type like "[object Object]".
 * @param value - input
 * @returns string type like "[object Object]".
 * @example
 * ```ts
 *  getTag(new Set())   // "[object Set]"
 *  getTag(new Map())   // "[object Map]"
 *  getTag({})          // "[object Object]"
 *  getTag("")          // "[object String]"
 *  getTag(1)           // "[object Number]"
 *  getTag(null)        // "[object Null]"
 *  getTag(undefined)   // "[object Undefined]"
 *  getTag(new Date())  // "[object Date]"
 *  getTag(Symbol())    // "[object Symbol]"
 * ```
 * @internal
 */
export function getTag<T>(value: T): string {
  return Object.prototype.toString.call(value);
}
