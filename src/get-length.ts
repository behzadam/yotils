import { isArray } from './is-array';
import { isObject } from './is-object';
import { isString } from './is-string';

/**
 * Gets length of string | array | object
 * @param value - string | array | object
 * @returns length of the input or 0
 *
 * @public
 */
export function getLength<T>(value: T): number {
  if (isString(value) || isArray(value)) {
    return value.length;
  }

  if (isObject(value)) {
    return Object.keys(value).length;
  }
  // For primitive types:
  return 0;
}
