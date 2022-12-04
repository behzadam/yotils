/**
 * Determines whether an input is number or not.
 * @param value - input
 * @returns true if the input is number, false otherwise.
 * @example
 * ```ts
 * isNumber(1)           // true
 * isNumber(NaN)         // false
 * isNumber(Infinity)    // false
 * isNumber("1")         // false
 * ```
 * @public
 */
export function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}
