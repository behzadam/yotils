/**
 * Compares all items in the given array and returns true if they are same.
 * @param array - Given array.
 * @returns true | false
 * @example
 *
 * ```ts
 * areSame([1, 1, 1, 1]) // true
 * areSame(["one", "one", "one"]) // true
 * areSame([1, 2]) // false
 * ```
 * @alpha
 */
export function areSame<T extends string | number | boolean>(
  array: Required<T[]>,
): boolean {
  return array.every((item) => item === array[0]);
}
