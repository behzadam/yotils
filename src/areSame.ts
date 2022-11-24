/**
 * Checks if all items in the given array are same.
 * @param path - Given array.
 * @returns true | false
 * @beta 1.0
 *
 * #### Usage
 *
 * ```ts
 * areSame([1, 1, 1, 1]) // true
 * areSame(["one", "one", "one"]) // true
 * areSame([1, 2]) // false
 * ```
 */
function areSame<T extends string | number | boolean>(
  arr: Required<T[]>
): boolean {
  return arr.every((item) => item === arr[0]);
}

export default areSame;
