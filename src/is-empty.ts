import { getLength } from "./get-length";

/**
 * Determines whether an input is empty or not.
 * @param value - input.
 * @returns true if the input is empty, false otherwise.
 * @example
 * ```ts
 *  []       | ${true}
 *  {}       | ${true}
 *  ""       | ${true}
 *  null     | ${true}
 *  true     | ${true}
 *  1        | ${true}
 *  id: 1    | ${false}
 *  [1]      | ${false}
 *  "1"      | ${false}
 * ```
 * @public
 */
export function isEmpty<T>(value: T): value is T {
  if (value == null) return true;
  return getLength(value) === 0;
}
