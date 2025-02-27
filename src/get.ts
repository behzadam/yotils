/**
 * Retrieves the value at the specified path from the given object.
 *
 * @param obj - The object to retrieve the value from.
 * @param path - The path to the desired value, specified as a string or an array of strings.
 * @param defaultValue - The value to return if the path does not exist in the object.
 *
 * @example
 * const object = { a: [{ b: { c: 3 } }] };
 * get(object, 'a[0].b.c'); // returns 3
 * get(object, ['a', '0', 'b', 'c']); // returns 3
 * get(object, 'a.b.c'); // returns undefined
 * get(object, 'a.b.c', 'default'); // returns 'default'
 * get(object, 'a.b.c', 42); // returns 42
 *
 * @returns The value at the specified path, or the default value if the path does not exist.
 */
import { AnyObject } from './types';

export function get<T>(
  obj: AnyObject,
  path: string | string[],
  defaultValue?: T,
): T | undefined {
  if (!obj || typeof obj !== 'object') {
    return defaultValue;
  }

  /**
   * - The path.split(/\.|\[|\]/) splits the path string by ., [, or ].
   * - The filter(Boolean) removes any empty strings,
   *   resulting from the split (e.g., from trailing or leading brackets).
   *
   * Example:
   * 'a[0].b.c' becomes ['a', '0', 'b', 'c']
   * 'x.y.z' becomes ['x', 'y', 'z']
   */
  const pathArray = Array.isArray(path)
    ? path
    : path.split(/\.|\[|\]/).filter(Boolean);

  let result: AnyObject | undefined = obj;
  for (const key of pathArray) {
    // `key in result` works in both array and object,
    // because array indices are treated as strings in JavaScript objects.
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result as T;
}
