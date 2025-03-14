/**
 * Checks if a value is undefined or null.
 *
 * @param value - The value to check.
 * @returns A type predicate indicating whether the value is undefined or null.
 *
 * @example
 * ```ts
 * const value: string | undefined | null = undefined;
 * if (isUndefinedOrNull(value)) {
 *   // value is undefined or null
 * }
 * ```
 * @public
 */
export function isUndefinedOrNull(value: unknown): value is undefined | null {
  return value === undefined || value === null;
}
