/**
 * Determines whether the input is a Date type or not.
 * @param value - input.
 * @returns true if the input is a Date type, false otherwise.
 * @example
 * ```ts
 * isDate(new Date(2000, 1, 1)) // true
 * isDate('29 Feb 2020') // false
 * ```
 *
 * @public
 */
export function isDate(value: any): value is Date {
  return value instanceof Date;
}
