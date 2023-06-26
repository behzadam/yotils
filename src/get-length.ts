import { isArray } from './is-array';
import { isObject } from './is-object';
import { isString } from './is-string';

/**
 * Gets length of string | array | object
 * @param input - string | array | object
 * @returns length of the input or 0
 *
 * @public
 */
export function getLength<Input>(input: Input): number {
  if (isString(input) || isArray(input)) {
    return input.length;
  }

  if (isObject(input)) {
    return Object.keys(input).length;
  }
  // For primitive types:
  return 0;
}
