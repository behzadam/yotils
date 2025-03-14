import { Primitive } from './types';

/**
 * Compares all items in the given array and returns true if they are same.
 * @param array - Given array of items to compare.
 * @returns true | false
 * @example
 *
 * ```ts
 * areSame([1, 1, 1, 1]) // true
 * areSame(["one", "one", "one"]) // true
 * areSame([1, 2]) // false
 * ```
 */
export function areSame<Item extends Primitive>(
  array: readonly Item[],
): boolean {
  if (array.length <= 1) return true;
  const firstItem = array[0];
  return array.slice(1).every((item) => item === firstItem);
}
