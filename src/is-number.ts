/**
 * Determines whether an input is number or not.
 * @param value - input
 * @returns true if the input is number, false otherwise.
 * @example
 * ```ts
 * isNumber(1)     // true
 * isNumber({})    // false
 * isNumber([])    // false
 * isNumber(true)  // false
 * ```
 * @public
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
