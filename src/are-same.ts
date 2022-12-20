/**
 * Compares all items in the given array and returns true if they are same.
 * @param arr - Given array.
 * @returns true | false
 * @example
 *
 * ```ts
 * areSame([1, 1, 1, 1]) // true
 * areSame(["one", "one", "one"]) // true
 * areSame([1, 2]) // false
 * ```
 * @public
 */
export function areSame<T extends string | number | boolean>(
  arr: Required<T[]>,
): boolean {
  return arr.every((item) => item === arr[0]);
}
