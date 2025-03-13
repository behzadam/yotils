/**
 * Groups an array of items into an object based on a key selector function.
 *
 * @template T The type of items in the input array
 * @template K The type of the key used for grouping (string, number, or symbol)
 * @param array The input array to be grouped
 * @param getKey A function that returns a key for each item in the array
 * @returns An object where keys are generated by the getKey function and values are the corresponding items
 * @example
 * ```ts
 * const people = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Charlie', age: 25 },
 * ];
 *
 * const groupedPeople = groupBy(people, (person) => person.age);
 * // {
 * //   '25': [
 * //     { name: 'Alice', age: 25 },
 * //     { name: 'Charlie', age: 25 },
 * //   ],
 * //   '30': [
 * //     { name: 'Bob', age: 30 },
 * //   ],
 * // }
 * ```
 * @public
 */
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  getKey: (item: T) => K,
): Record<K, T> {
  return array.reduce(
    (acc, item) => ({ ...acc, [getKey(item)]: item }),
    {} as Record<K, T>,
  );
}
