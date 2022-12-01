import { isArray } from "./is-array";
import { isObject } from "./is-object";
import { isString } from "./is-string";

export default function getLength<T>(value: T): number {
  if (isString(value) || isArray(value)) {
    return value.length;
  }

  if (isObject(value)) {
    return Object.keys(value).length;
  }
  // For primitive types:
  return 0;
}
