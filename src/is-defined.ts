/**
 * Determines whether the input is defined or not.
 * @param value - input
 * @returns true if the input is defined, false otherwise.
 * @example
 * ```ts
 * declare let val: string | undefined;
 * if (isDefined(val)) {
 *   // val is defined and safe to use.
 *   val.toLocaleLowerCase()
 * }
 * ```
 * @public
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}
