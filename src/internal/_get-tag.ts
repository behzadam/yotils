/**
 * Calls `toString` with `value` and returns a string object type like "[object Object]".
 * @param value - input
 * @returns string type like "[object Object]":
 * @remarks
 * A deeper explanation of [object Object]:
 * {@link https://betterprogramming.pub/what-is-object-object-in-javascript-object-prototype-tostring-1db888c695a4 | Link}
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
